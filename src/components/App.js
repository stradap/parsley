import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from '@ant-design/react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';

import Register from './Register';
import HomeScreen from './Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider locale={enUS}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={HomeScreen} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
