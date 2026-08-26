import plugin from '../plugin.json';
import { snippets } from './snippets.js';

/**
 *  Plugin React Native — versão nativa CodeMirror 6 + File Index API
 *  Snippets para React Native
 *  ImportIntellisense de Componentes
 */

const cm = acode.require('codemirror');
const { autocompletion, snippetCompletion } = cm.autocomplete;
const { ViewPlugin } = cm.view;
const { StateEffect, Compartment } = cm.state;

const VALID_EXTENSIONS = ['tsx', 'ts', 'js', 'jsx'];
const COMPONENT_EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx'];

class AcodePlugin {
	constructor() {
		this.editor = null; // EditorView (CM6)
		this.fileIndex = null; // acode.require("fileIndex") — undefined em builds antigas
		this.extensions = new Compartment();

		// bind pra poder usar como referência estável (snippetSource é usado
		// dentro de autocompletion({ override: [...] }))
		this.snippetSource = this.snippetSource.bind(this);
	}

	// "main" -> "Main", "user-profile" -> "UserProfile", "user_profile" -> "UserProfile"
	// Componentes React são convencionalmente PascalCase; o nome do arquivo raramente já vem assim.
	toPascalCase(name) {
		if (!name) return name;
		return name.replace(/(^|[-_ ]+)([a-zA-Z0-9])/g, (_, __, char) => char.toUpperCase());
	}

	getActiveExtension() {
		const { activeFile } = editorManager;
		return activeFile?.filename?.split('.').pop() ?? '';
	}

	// Raízes de workspace indexáveis nativamente (SAF/file://) — usadas em toda query
	getWorkspaceRoots() {
		const addedFolder = acode.require('addedfolder') || [];
		return addedFolder.filter(folder => folder.listFiles && this.fileIndex.supports(folder.url)).map(folder => folder.url);
	}

	// Busca um arquivo pelo nome exato usando o índice nativo.
	// Substitui o antigo mapa "directoryPaths" construído a partir de fileList().
	async findFileByName(name) {
		if (!name || !this.fileIndex?.query) {
			return null;
		}

		const roots = this.getWorkspaceRoots();
		if (!roots.length) {
			return null;
		}

		try {
			await this.fileIndex.whenReady(roots);

			const { entries } = await this.fileIndex.query({
				roots,
				text: name,
				limit: 50,
			});

			return entries.find(entry => entry.isFile && entry.name === name) || null;
		} catch (error) {
			console.error('Error querying fileIndex for', name, error);
			return null;
		}
	}

	async init() {
		if (!editorManager.isCodeMirror) {
			// esse arquivo é só para o motor CodeMirror 6; use a versão Ace para versões antigas do Acode
			window.toast?.('Este plugin requer o motor CodeMirror do Acode.', 4000);
			return;
		}

		this.editor = editorManager.editor;
		this.fileIndex = acode.require('fileIndex');

		if (!this.fileIndex?.query) {
			// build antigo sem File Index API (< versionCode 1002): ImportIntellisense fica desativado,
			// mas os snippets continuam funcionando normalmente.
			console.warn('fileIndex indisponível; ImportIntellisense de componentes ficará desativado.');
		}

		const style = document.createElement('style');
		style.id = 'helpDescription';
		style.innerHTML = `
.cm-tooltip.cm-completionInfo {
  background-color: var(--secondary-color);
  color: #acacb7;
  max-width: 80%;
  white-space: pre;
  font-size: 10px;
  padding: 5px;
  border-radius: 2px;
}`;
		document.head.append(style);

		const cmExtensions = [autocompletion({ override: [this.snippetSource] })];

		if (this.fileIndex?.query) {
			cmExtensions.push(this.buildImportIntellisensePlugin());
		}

		// Injeta as extensões no editor já em execução.
		// Usamos um Compartment para poder desligar tudo de uma vez no destroy().
		this.editor.dispatch({
			effects: StateEffect.appendConfig.of(this.extensions.of(cmExtensions)),
		});
	}

	// Fonte de autocompletar nativa do CM6 (@codemirror/autocomplete)
	snippetSource(context) {
		const ext = this.getActiveExtension();

		if (!VALID_EXTENSIONS.includes(ext)) {
			return null;
		}

		const word = context.matchBefore(/[\w-]+/);

		if (!word || (word.from === word.to && !context.explicit)) {
			return null;
		}

		const prefix = word.text;
		const matched = snippets.filter(snippet => snippet && snippet.label && snippet.label.startsWith(prefix));

		if (!matched.length) {
			return null;
		}

		const { activeFile } = editorManager;
		const fileName = activeFile.filename.split('/').pop().split('.').slice(0, -1).join('.');
		// PascalCase pro nome do componente (main -> Main). O regex do replace
		// precisa casar o "$" também, senão sobra "$main" — o snippets.js usa
		// "$FILE_NAME" (com $), não "FILE_NAME" sozinho.
		const componentName = this.toPascalCase(fileName);

		return {
			from: word.from,
			options: matched.map(snippet =>
				snippetCompletion(snippet.snippet.replace(/\$FILE_NAME/g, componentName), {
					label: snippet.label,
					type: snippet.type,
					detail: snippet.detail || snippet.description || '',
					info: snippet.description || snippet.detail || '',
					// snippet.boost já vem certo (todos entre -99 e 99); o "?? 0" é só
					// rede de segurança pra snippet novo que alguém esqueça de definir —
					// nunca 600 de novo, isso já causou confusão no passado.
					boost: snippet.boost ?? 0,
				}),
			),
		};
	}

	/// Setup ImportIntellisense (ouve mudanças no documento via ViewPlugin)
	buildImportIntellisensePlugin() {
		const self = this;

		return ViewPlugin.fromClass(
			class {
				update(update) {
					if (update.docChanged) {
						self.handleCodeChange(update.view);
					}
				}
			},
		);
	}

	async handleCodeChange(view) {
		const pos = view.state.selection.main.head;
		const line = view.state.doc.lineAt(pos);
		const column = pos - line.from;

		const openCol = this.findTagOpening(line.text, column);

		if (openCol === -1) {
			return;
		}

		const tagName = this.extractTag(line.text, openCol);

		if (!tagName) {
			return;
		}

		const componentSearch = await this.componentLocation(tagName);

		if (componentSearch && componentSearch.directoryForTagName) {
			await this.setupImportReactComponent(tagName, componentSearch, view);
		}
	}

	// configure import component React Native
	async setupImportReactComponent(tagName, directory, view) {
		try {
			const relativePath = this.calculateRelativePath(directory.directoryForCurrentFile, directory.directoryForTagName);

			const componentNameWithExtension = directory.directoryForTagName.split('/').pop();

			const componentName = componentNameWithExtension.split('.').slice(0, -1).join('.');

			const relativePathWithoutExtension = relativePath.split('.').slice(0, -1).join('.');

			const importStatement = `import ${componentName} from '${relativePathWithoutExtension}';`;

			const code = view.state.doc.toString();

			const importRegex = new RegExp(`import\\s+${componentName}\\s+from\\s+'${relativePathWithoutExtension}'`);

			if (!importRegex.test(code)) {
				view.dispatch({
					changes: { from: 0, insert: `${importStatement}\n` },
				});

				this.closeTag(view);
				window.toast('The import was created at the top ☝️ successfully', 3000);
			}
		} catch (error) {
			console.error('Error in setupImportReactComponent:', error);
			window.toast('Component not found', 4000);
		}
	}

	// component location no workspace, via File Index API (consulta sob demanda,
	// substitui a antiga leitura do mapa "directoryPaths" pré-carregado com fileList())
	async componentLocation(tagName) {
		try {
			const { activeFile } = editorManager;
			const currentFileName = activeFile.filename || '';

			let targetEntry = null;

			for (const ext of COMPONENT_EXTENSIONS) {
				targetEntry = await this.findFileByName(tagName + ext);
				if (targetEntry) break;
			}

			if (!targetEntry) {
				// arquivo do componente não existe no índice — nada a importar
				return { directoryForTagName: null, directoryForCurrentFile: null };
			}

			const currentFileEntry = await this.findFileByName(currentFileName);

			return {
				directoryForTagName: targetEntry.path,
				directoryForCurrentFile: currentFileEntry ? currentFileEntry.path : null,
			};
		} catch (error) {
			console.error('Error finding cache path for tagName:', error);
			return {
				directoryForTagName: null,
				directoryForCurrentFile: null,
			};
		}
	}

	// handle tag opening, find tag opening
	findTagOpening(row, column) {
		for (let n = column; n >= 0; n--) {
			if (row[n] === '<') {
				return n;
			}
		}
		return -1;
	}

	extractTag(row, openCol) {
		let tagName = '';
		let closeTag = false;
		for (let i = openCol + 1; i < row.length; i++) {
			if (row[i] === ' ' || row[i] === '>') {
				if (closeTag) {
					tagName += '>';
				}
				break;
			}
			if (row[i] === '<') {
				closeTag = true;
			}
			tagName += row[i];
		}
		return tagName;
	}

	closeTag(view) {
		const pos = view.state.selection.main.head;
		view.dispatch({
			changes: { from: pos, insert: ' />\n' },
			selection: { anchor: pos + 4 },
		});
	}

	calculateRelativePath(currentDirectory, targetDirectory) {
		const currentPathParts = currentDirectory.split('/');
		const targetPathParts = targetDirectory.split('/');
		let commonPathLength = 0;

		while (
			commonPathLength < currentPathParts.length &&
			commonPathLength < targetPathParts.length &&
			currentPathParts[commonPathLength] === targetPathParts[commonPathLength]
		) {
			commonPathLength++;
		}

		let relativePath = '';

		if (commonPathLength === currentPathParts.length - 1 && commonPathLength === targetPathParts.length - 1) {
			relativePath = './' + targetPathParts[targetPathParts.length - 1];
		} else {
			for (let i = commonPathLength; i < currentPathParts.length - 1; i++) {
				relativePath += '../';
			}

			if (!relativePath.startsWith('./') && !relativePath.startsWith('../')) {
				relativePath = './' + relativePath;
			}

			for (let i = commonPathLength; i < targetPathParts.length; i++) {
				relativePath += targetPathParts[i] + '/';
			}

			if (relativePath.endsWith('/')) {
				relativePath = relativePath.slice(0, -1);
			}
		}
		return relativePath;
	}

	async destroy() {
		if (this.editor) {
			// Desliga autocompletion + ImportIntellisense de uma vez só
			this.editor.dispatch({
				effects: this.extensions.reconfigure([]),
			});
		}
		document.getElementById('helpDescription')?.remove();
	}
}

if (window.acode) {
	const acodePlugin = new AcodePlugin();

	acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
		if (!baseUrl.endsWith('/')) {
			baseUrl += '/';
		}
		await acodePlugin.init(baseUrl, $page, cacheFileUrl, cacheFile);
	});

	acode.setPluginUnmount(plugin.id, () => {
		acodePlugin.destroy();
	});
}
