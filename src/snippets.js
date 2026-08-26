/*
Construção de Snippets para REACT NATIVE - CodeMirror 6
*/
export const snippets = [
  // ==================== IMPORTS ====================
  {
    label: 'im-import-React',
    snippet: "import React from 'react';",
    type: 'snippet RN',
    detail: 'Import React in React Native',
    boost: 60,
  },
  {
    label: 'im-import',
    snippet: "import { \${1} } from 'react-native';",
    type: 'snippet RN',
    detail: 'Import from React Native',
    boost: 50,
  },
  {
    label: 'im-useState',
    snippet: "import { useState } from 'react';",
    type: 'snippet RN',
    detail: 'Import useState from React',
  },
  {
    label: 'im-useEffect',
    snippet: "import { useEffect } from 'react';",
    type: 'snippet RN',
    detail: 'Import useEffect from React',
  },
  {
    label: 'im-navigation',
    snippet: "import { NavigationContainer } from '@react-navigation/native';",
    type: 'snippet RN',
    detail: 'Import NavigationContainer from React Navigation',
  },
  {
    label: 'im-stack',
    snippet: "import { createStackNavigator } from '@react-navigation/stack';",
    type: 'snippet RN',
    detail: 'Import createStackNavigator from React Navigation Stack',
  },
  {
    label: 'im-styleSheet',
    snippet: "import { StyleSheet } from 'react-native';",
    type: 'snippet RN',
    detail: 'Import StyleSheet from React Native',
  },
  {
    label: 'im-text',
    snippet: "import { Text } from 'react-native';",
    type: 'snippet RN',
    detail: 'Import Text from React Native',
  },
  {
    label: 'im-view',
    snippet: "import { View } from 'react-native';",
    type: 'snippet RN',
    detail: 'Import View from React Native',
  },
  {
    label: 'im-button',
    snippet: "import { Button } from 'react-native';",
    type: 'snippet RN',
    detail: 'Import Button from React Native',
  },
  {
    label: 'im-r',
    snippet: "import React from 'react';",
    type: 'snippet RN',
    detail: 'Import React in React Native',
  },
  {
    label: 'im-all',
    snippet: "import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';",
    type: 'snippet RN',
    detail: 'Import common components and StyleSheet from React Native',
    boost: 60,
  },

  // ==================== COMPONENTES ====================
  {
    label: 'rn-component',
    snippet: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const $FILE_NAME = () => {
  return (
    <View style={styles.container}>
      <Text>\${1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default $FILE_NAME;`,
    type: 'snippet RN',
    detail: 'Functional component with styles',
    boost: 90,
  },
  {
    label: 'rn-component-ts',
    snippet: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  \${1}
}

const $FILE_NAME: React.FC<Props> = ({ \${2} }) => {
  return (
    <View style={styles.container}>
      <Text>\${3}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default $FILE_NAME;`,
    type: 'snippet RN',
    detail: 'Functional component with TypeScript',
    boost: 80,
  },
  {
    label: 'rn-export-function',
    snippet: `import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function $FILE_NAME() {
  return (
    <View style={styles.container}>
      <Text>\${1}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});`,
    type: 'snippet RN',
    detail: 'Export named function component',
    boost: 60,
  },

  // ==================== HOOKS ====================
  {
    label: 'rn-usestate',
    snippet: 'const [\${1}, set\${2}] = useState(\${3});',
    type: 'snippet RN',
    detail: 'useState hook',
    boost: 50,
  },
  {
    label: 'rn-useeffect',
    snippet: `useEffect(() => {
  \${1}
}, [\${2}]);`,
    type: 'snippet RN',
    detail: 'useEffect hook',
    boost: 50,
  },
  {
    label: 'rn-usecontext',
    snippet: 'const \${1} = useContext(\${2}Context);',
    type: 'snippet RN',
    detail: 'useContext hook',
  },
  {
    label: 'rn-usereducer',
    snippet: 'const [state, dispatch] = useReducer(\${1}Reducer, \${2});',
    type: 'snippet RN',
    detail: 'useReducer hook',
  },
  {
    label: 'rn-usecallback',
    snippet: `const \${1} = useCallback(() => {
  \${2}
}, [\${3}]);`,
    type: 'snippet RN',
    detail: 'useCallback hook',
  },
  {
    label: 'rn-usememo',
    snippet: `const \${1} = useMemo(() => {
  return \${2};
}, [\${3}]);`,
    type: 'snippet RN',
    detail: 'useMemo hook',
  },
  {
    label: 'rn-useref',
    snippet: 'const \${1} = useRef(\${2});',
    type: 'snippet RN',
    detail: 'useRef hook',
  },

  // ==================== COMPONENTES JSX ====================
  {
    label: 'rn-view',
    snippet: `<View style={styles.\${1}}>
  \${2}
</View>`,
    type: 'snippet RN',
    detail: 'View component',
  },
  {
    label: 'rn-text',
    snippet: '<Text style={styles.\${1}}>\${2}</Text>',
    type: 'snippet RN',
    detail: 'Text component',
  },
  {
    label: 'rn-button',
    snippet: `<Button
  title="\${1}"
  onPress={\${2}}
/>`,
    type: 'snippet RN',
    detail: 'Button component',
  },
  {
    label: 'rn-textinput',
    snippet: `<TextInput
  style={styles.\${1}}
  placeholder="\${2}"
  value={\${3}}
  onChangeText={\${4}}
/>`,
    type: 'snippet RN',
    detail: 'TextInput component',
  },
  {
    label: 'rn-image',
    snippet: `<Image
  source={{ uri: '\${1}' }}
  style={styles.\${2}}
/>`,
    type: 'snippet RN',
    detail: 'Image component',
  },
  {
    label: 'rn-scrollview',
    snippet: `<ScrollView style={styles.\${1}}>
  \${2}
</ScrollView>`,
    type: 'snippet RN',
    detail: 'ScrollView component',
  },
  {
    label: 'rn-flatlist',
    snippet: `<FlatList
  data={\${1}}
  renderItem={({ item }) => (
    \${2}
  )}
  keyExtractor={(item) => item.id.toString()}
/>`,
    type: 'snippet RN',
    detail: 'FlatList component',
  },
  {
    label: 'rn-sectionlist',
    snippet: `<SectionList
  sections={\${1}}
  renderItem={({ item }) => (
    \${2}
  )}
  renderSectionHeader={({ section }) => (
    <Text style={styles.header}>{section.title}</Text>
  )}
  keyExtractor={(item) => item.id.toString()}
/>`,
    type: 'snippet RN',
    detail: 'SectionList component',
  },
  {
    label: 'rn-touchableopacity',
    snippet: `<TouchableOpacity onPress={\${1}} activeOpacity={0.7}>
  \${2}
</TouchableOpacity>`,
    type: 'snippet RN',
    detail: 'TouchableOpacity component',
  },
  {
    label: 'rn-pressable',
    snippet: `<Pressable onPress={\${1}} style={({ pressed }) => [
  styles.\${2},
  pressed && styles.pressed
]}>
  \${3}
</Pressable>`,
    type: 'snippet RN',
    detail: 'Pressable component',
  },
  {
    label: 'rn-safeareaview',
    snippet: `<SafeAreaView style={styles.\${1}}>
  \${2}
</SafeAreaView>`,
    type: 'snippet RN',
    detail: 'SafeAreaView component',
  },
  {
    label: 'rn-modal',
    snippet: `<Modal
  visible={\${1}}
  transparent={\${2}}
  onRequestClose={\${3}}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      \${4}
    </View>
  </View>
</Modal>`,
    type: 'snippet RN',
    detail: 'Modal component',
  },
  {
    label: 'rn-activityindicator',
    snippet: '<ActivityIndicator size="\${1}" color="\${2}" />',
    type: 'snippet RN',
    detail: 'ActivityIndicator component',
  },

  // ==================== STYLES ====================
  {
    label: 'rn-styles',
    snippet: `const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '\${1}',
  },
  \${2}: {
    \${3}
  },
});`,
    type: 'snippet RN',
    detail: 'StyleSheet creation',
    boost: 50,
  },
  {
    label: 'rn-style-prop',
    snippet: 'style={styles.\${1}}',
    type: 'snippet RN',
    detail: 'Style prop',
  },
  {
    label: 'rn-style-array',
    snippet: 'style={[styles.\${1}, \${2}]}',
    type: 'snippet RN',
    detail: 'Style array',
  },

  // ==================== NAVIGATION ====================
  {
    label: 'rn-navigation-container',
    snippet: `import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="\${1}" component={\${2}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;`,
    type: 'snippet RN',
    detail: 'Navigation container with stack',
    boost: 60,
  },
  {
    label: 'rn-navigation-screen',
    snippet: `<Stack.Screen 
  name="\${1}" 
  component={\${2}} 
  options={{ 
    title: '\${3}',
    headerStyle: {
      backgroundColor: '\${4}',
    },
    headerTintColor: '#fff',
  }} 
/>`,
    type: 'snippet RN',
    detail: 'Stack Screen with options',
  },
  {
    label: 'rn-navigation-params',
    snippet: `navigation.navigate('\${1}', {
  \${2}: \${3}
})`,
    type: 'snippet RN',
    detail: 'Navigate with params',
  },
  {
    label: 'rn-navigation-go-back',
    snippet: 'navigation.goBack()',
    type: 'snippet RN',
    detail: 'Go back navigation',
  },
  {
    label: 'rn-navigation-replace',
    snippet: `navigation.replace('\${1}', {
  \${2}
})`,
    type: 'snippet RN',
    detail: 'Replace navigation',
  },
  {
    label: 'rn-navigation-reset',
    snippet: `navigation.reset({
  index: 0,
  routes: [{ name: '\${1:}' }],
})`,
    type: 'snippet RN',
    detail: 'Reset navigation',
  },

  // ==================== EXPO ROUTER ====================
  {
    label: 'er-router',
    snippet: `import { useRouter } from 'expo-router';

const router = useRouter();`,
    type: 'snippet Expo Router',
    detail: 'Import and use the Expo Router hook',
    boost: 60,
  },
  {
    label: 'er-link',
    snippet: `import { Link } from 'expo-router';

<Link href="\${1:/}">
  <Text>\${2:}</Text>
</Link>`,
    type: 'snippet Expo Router',
    detail: 'Declarative navigation with Link',
    boost: 50,
  },
  {
    label: 'er-push',
    snippet: "router.push('\${1:/}');",
    type: 'snippet Expo Router',
    detail: 'Navigate to a route (adds to stack)',
    boost: 50,
  },
  {
    label: 'er-push-params',
    snippet: `router.push({
  pathname: '\${1:/}',
  params: { \${2:}: \${3:} },
});`,
    type: 'snippet Expo Router',
    detail: 'Navigate to a route with params',
    boost: 30,
  },
  {
    label: 'er-replace',
    snippet: "router.replace('\${1:/}');",
    type: 'snippet Expo Router',
    detail: 'Navigate replacing current route (no back)',
    boost: 30,
  },
  {
    label: 'er-back',
    snippet: 'router.back();',
    type: 'snippet Expo Router',
    detail: 'Go back to previous route',
    boost: 30,
  },
  {
    label: 'er-params',
    snippet: `import { useLocalSearchParams } from 'expo-router';

const { \${1:} } = useLocalSearchParams();`,
    type: 'snippet Expo Router',
    detail: 'Read params from the current route',
    boost: 50,
  },
  {
    label: 'er-global-params',
    snippet: `import { useGlobalSearchParams } from 'expo-router';

const { \${1:} } = useGlobalSearchParams();`,
    type: 'snippet Expo Router',
    detail: 'Read params visible to all nested routes',
    boost: 10,
  },
  {
    label: 'er-layout-stack',
    snippet: `import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '\${1:#fff}' },
        headerTintColor: '\${2:#000}',
      }}
    >
      <Stack.Screen name="\${3:index}" options={{ title: '\${4:}' }} />
    </Stack>
  );
}`,
    type: 'snippet Expo Router',
    detail: '_layout.tsx with a Stack navigator',
    boost: 40,
  },
  {
    label: 'er-layout-tabs',
    snippet: `import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '\${1:#000}',
      }}
    >
      <Tabs.Screen name="\${2:index}" options={{ title: '\${3:}' }} />
    </Tabs>
  );
}`,
    type: 'snippet Expo Router',
    detail: '_layout.tsx with a Tabs navigator',
    boost: 40,
  },
  {
    label: 'er-screen-options',
    snippet: `<Stack.Screen
  name="\${1:}"
  options={{
    title: '\${2:}',
    headerShown: \${3:true},
  }}
/>`,
    type: 'snippet Expo Router',
    detail: 'Stack.Screen options inside a layout',
    boost: 10,
  },
  {
    label: 'er-redirect',
    snippet: `import { Redirect } from 'expo-router';

if (\${1:}) {
  return <Redirect href="\${2:/}" />;
}`,
    type: 'snippet Expo Router',
    detail: 'Conditional redirect',
    boost: 10,
  },

  // ==================== ASYNC STORAGE ====================
  {
    label: 'rn-asyncstorage-set',
    snippet: `import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error storing data:', error);
  }
};`,
    type: 'snippet RN',
    detail: 'AsyncStorage set item',
  },
  {
    label: 'rn-asyncstorage-get',
    snippet: `import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
};`,
    type: 'snippet RN',
    detail: 'AsyncStorage get item',
  },
  {
    label: 'rn-asyncstorage-remove',
    snippet: `import AsyncStorage from '@react-native-async-storage/async-storage';

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
  }
};`,
    type: 'snippet RN',
    detail: 'AsyncStorage remove item',
  },

  // ==================== LOGS ====================
  {
    label: 'clg',
    snippet: 'console.log(\${1});',
    type: 'snippet log',
    detail: 'Console log',
    boost: 90,
  },
  {
    label: 'clg-obj',
    snippet: "console.log('\${1}:', \${1});",
    type: 'snippet log',
    detail: 'Console log with label',
    boost: 40,
  },
  {
    label: 'clg-json',
    snippet: 'console.log(JSON.stringify(\${1}, null, 2));',
    type: 'snippet log',
    detail: 'Console log JSON formatted',
    boost: 30,
  },
  {
    label: 'clg-error',
    snippet: 'console.error(\${1});',
    type: 'snippet log',
    detail: 'Console error',
    boost: 50,
  },
  {
    label: 'clg-warn',
    snippet: 'console.warn(\${1});',
    type: 'snippet log',
    detail: 'Console warn',
    boost: 30,
  },
  {
    label: 'clg-time',
    snippet: `console.time('\${1}');
\${2}
console.timeEnd('\${1}');`,
    type: 'snippet log',
    detail: 'Console time',
    boost: 10,
  },
  {
    label: 'clg-table',
    snippet: 'console.table(\${1});',
    type: 'snippet log',
    detail: 'Console table',
    boost: 10,
  },
  {
    label: 'clg-group',
    snippet: `console.group('\${1}');
\${2}
console.groupEnd();`,
    type: 'snippet log',
    detail: 'Console group',
    boost: 10,
  },

  // ==================== EXPRESS ====================
  {
    label: 'exp-get',
    snippet: `app.get('/\${1}', (req, res) => {
  \${2}
  res.send(\${3});
});`,
    type: 'snippet Express',
    detail: 'Express GET route',
  },
  {
    label: 'exp-post',
    snippet: `app.post('/\${1}', (req, res) => {
  const { \${2} } = req.body;
  \${3}
  res.send(\${4});
});`,
    type: 'snippet Express',
    detail: 'Express POST route',
  },
  {
    label: 'exp-put',
    snippet: `app.put('/\${1}/:id', (req, res) => {
  const { id } = req.params;
  const { \${2} } = req.body;
  \${3}
  res.send(\${4});
});`,
    type: 'snippet Express',
    detail: 'Express PUT route',
  },
  {
    label: 'exp-delete',
    snippet: `app.delete('/\${1}/:id', (req, res) => {
  const { id } = req.params;
  \${2}
  res.send(\${3});
});`,
    type: 'snippet Express',
    detail: 'Express DELETE route',
  },
  {
    label: 'exp-middleware',
    snippet: `app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});`,
    type: 'snippet Express',
    detail: 'Express middleware',
  },
  {
    label: 'exp-error',
    snippet: `app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`,
    type: 'snippet Express',
    detail: 'Express error handler',
  },
  {
    label: 'exp-server',
    snippet: `const PORT = process.env.PORT || \${1};
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});`,
    type: 'snippet Express',
    detail: 'Start Express server',
  },

  // ==================== JAVASCRIPT ====================
  {
    label: 'const-arrow',
    snippet: `const \${1} = (\${2}) => {
  \${3}
};`,
    type: 'snippet JS',
    detail: 'Arrow function',
  },
  {
    label: 'const-object',
    snippet: `const \${1} = {
  \${2}
};`,
    type: 'snippet JS',
    detail: 'Object literal',
  },
  {
    label: 'try-catch',
    snippet: `try {
  \${1}
} catch (error) {
  \${2}
}`,
    type: 'snippet JS',
    detail: 'Try catch block',
  },
  {
    label: 'if-else',
    snippet: `if (\${1}) {
  \${2}
} else {
  \${3}
}`,
    type: 'snippet JS',
    detail: 'If else statement',
  },
  {
    label: 'for-loop',
    snippet: `for (let i = 0; i < \${1}.length; i++) {
  const \${2} = \${1}[i];
  \${3}
}`,
    type: 'snippet JS',
    detail: 'For loop',
  },
  {
    label: 'for-of',
    snippet: `for (const \${1} of \${2}) {
  \${3}
}`,
    type: 'snippet JS',
    detail: 'For of loop',
  },
  {
    label: 'map',
    snippet: `\${1}.map((\${2}) => {
  return \${3};
})`,
    type: 'snippet JS',
    detail: 'Array map',
  },
  {
    label: 'filter',
    snippet: `\${1}.filter((\${2}) => {
  return \${3};
})`,
    type: 'snippet JS',
    detail: 'Array filter',
  },

  // ==================== STYLE PROPERTIES ====================
  {
    label: 'flex',
    snippet: 'flex: \${1},',
    type: 'snippet Style',
    detail: 'Flex property',
  },
  {
    label: 'flexDirection',
    snippet: "flexDirection: '\${1}',",
    type: 'snippet Style',
    detail: 'Flex direction',
  },
  {
    label: 'justifyContent',
    snippet: "justifyContent: '\${1}',",
    type: 'snippet Style',
    detail: 'Justify content',
  },
  {
    label: 'alignItems',
    snippet: "alignItems: '\${1}',",
    type: 'snippet Style',
    detail: 'Align items',
  },
  {
    label: 'gap',
    snippet: 'gap: \${1},',
    type: 'snippet Style',
    detail: 'Gap between flex/grid items',
  },
  {
    label: 'alignSelf',
    snippet: "alignSelf: '\${1}',",
    type: 'snippet Style',
    detail: 'Align self',
  },
  {
    label: 'flexWrap',
    snippet: "flexWrap: '\${1}',",
    type: 'snippet Style',
    detail: 'Flex wrap',
  },
  {
    label: 'margin',
    snippet: 'margin: \${1},',
    type: 'snippet Style',
    detail: 'Margin',
  },
  {
    label: 'marginHorizontal',
    snippet: 'marginHorizontal: \${1},',
    type: 'snippet Style',
    detail: 'Margin horizontal',
  },
  {
    label: 'marginVertical',
    snippet: 'marginVertical: \${1},',
    type: 'snippet Style',
    detail: 'Margin vertical',
  },
  {
    label: 'padding',
    snippet: 'padding: \${1},',
    type: 'snippet Style',
    detail: 'Padding',
  },
  {
    label: 'paddingHorizontal',
    snippet: 'paddingHorizontal: \${1},',
    type: 'snippet Style',
    detail: 'Padding horizontal',
  },
  {
    label: 'paddingVertical',
    snippet: 'paddingVertical: \${1},',
    type: 'snippet Style',
    detail: 'Padding vertical',
  },
  {
    label: 'width',
    snippet: 'width: \${1},',
    type: 'snippet Style',
    detail: 'Width',
  },
  {
    label: 'height',
    snippet: 'height: \${1},',
    type: 'snippet Style',
    detail: 'Height',
  },
  {
    label: 'backgroundColor',
    snippet: "backgroundColor: '\${1}',",
    type: 'snippet Style',
    detail: 'Background color',
  },
  {
    label: 'borderRadius',
    snippet: 'borderRadius: \${1},',
    type: 'snippet Style',
    detail: 'Border radius',
  },
  {
    label: 'borderWidth',
    snippet: 'borderWidth: \${1},',
    type: 'snippet Style',
    detail: 'Border width',
  },
  {
    label: 'borderColor',
    snippet: "borderColor: '\${1}',",
    type: 'snippet Style',
    detail: 'Border color',
  },
  {
    label: 'color',
    snippet: "color: '\${1}',",
    type: 'snippet Style',
    detail: 'Text color',
  },
  {
    label: 'fontSize',
    snippet: 'fontSize: \${1},',
    type: 'snippet Style',
    detail: 'Font size',
  },
  {
    label: 'fontWeight',
    snippet: "fontWeight: '\${1}',",
    type: 'snippet Style',
    detail: 'Font weight',
  },
  {
    label: 'position',
    snippet: "position: '\${1}',",
    type: 'snippet Style',
    detail: 'Position',
  },
  {
    label: 'top',
    snippet: 'top: \${1},',
    type: 'snippet Style',
    detail: 'Top position',
  },
  {
    label: 'bottom',
    snippet: 'bottom: \${1},',
    type: 'snippet Style',
    detail: 'Bottom position',
  },
  {
    label: 'left',
    snippet: 'left: \${1},',
    type: 'snippet Style',
    detail: 'Left position',
  },
  {
    label: 'right',
    snippet: 'right: \${1},',
    type: 'snippet Style',
    detail: 'Right position',
  },
  {
    label: 'zIndex',
    snippet: 'zIndex: \${1},',
    type: 'snippet Style',
    detail: 'Z-index',
  },
  {
    label: 'opacity',
    snippet: 'opacity: \${1},',
    type: 'snippet Style',
    detail: 'Opacity',
  },
  {
    label: 'shadowColor',
    snippet: "shadowColor: '\${1}',",
    type: 'snippet Style',
    detail: 'Shadow color',
  },
  {
    label: 'shadowOffset',
    snippet: 'shadowOffset: { width: \${1}, height: \${2} },',
    type: 'snippet Style',
    detail: 'Shadow offset',
  },
  {
    label: 'shadowOpacity',
    snippet: 'shadowOpacity: \${1},',
    type: 'snippet Style',
    detail: 'Shadow opacity',
  },
  {
    label: 'shadowRadius',
    snippet: 'shadowRadius: \${1},',
    type: 'snippet Style',
    detail: 'Shadow radius',
  },
  {
    label: 'elevation',
    snippet: 'elevation: \${1},',
    type: 'snippet Style',
    detail: 'Elevation (Android)',
  },
];