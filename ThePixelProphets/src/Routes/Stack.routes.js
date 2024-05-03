// Arquivo Stack.routes.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Login from "../pages/Login"
import RotasDrawer from "./Drawer.routes";
import RotasTabs from "./BottomTabs.routes";
import Splash from "../pages/Splash";
import DrawerRoutes from "./Drawer.routes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
                <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={DrawerRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerTabs"
          component={DrawerRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}
