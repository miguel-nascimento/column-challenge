import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './pages/Detail';
import List from './pages/List';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="List"
          component={List}
          />
        <Stack.Screen 
          name="Detail"
          component={Detail}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes