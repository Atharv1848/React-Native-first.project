import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TablePaginationAxios from "./TablePaginationAxios";
import { Provider as PaperProvider } from 'react-native-paper';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to our Home Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Conference')}
        style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
      >
      <Text>Conference</Text>
      </Pressable>
      
      <Pressable
        onPress={() => navigation.navigate('Story')}
        style={{ backgroundColor: 'plum', padding: 10 }}
      >
       <Text>Story</Text>
      </Pressable>
      
      <Pressable
        onPress={() => navigation.navigate('TablePaginationAxios')}
        style={{ backgroundColor: 'plum', padding: 10,marginTop: 10 }}
      >
       <Text>TablePaginationAxios</Text>
      </Pressable>
    </View>
  );
}

function Conference({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Conference Details</Text>
    </View>
  );
}

function Story() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Our Story</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Conference" component={Conference} />
        <Stack.Screen name="TablePaginationAxios" component={TablePaginationAxios} />
        <Stack.Screen name="Story" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
