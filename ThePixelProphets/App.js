import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Styles from "./src/styles/StyleSheet"; // Importação do Style

import Login from "./src/pages/Login"; // Importação da página Login

import First from "./src/pages/First"; // Importacao da Pagina First

import Home from "./src/pages/Home"; // Importacao da Pagina Home

import Transferencia from "./src/pages/Transferencia"; // Importacao da Pagina Transferencia

import Perfil from "./src/pages/Perfil"; // Importacao da Pagina Perfil

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={First}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transferencia"
          component={Transferencia}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
