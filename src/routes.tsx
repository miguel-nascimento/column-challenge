import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Detail from "./pages/Detail";
import List from "./pages/List";

export type RouteProps = {
  List: undefined;
  Detail: { id: string };
};

const screenOptions = {
  noHeader: {
    headerShown: false,
  }
}

const Stack = createStackNavigator<RouteProps>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={screenOptions.noHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
