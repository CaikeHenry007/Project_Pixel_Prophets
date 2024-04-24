import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./src/pages/Login"; // Importação da página Login

import Home from "./src/pages/Home"; // Importacao da Pagina Home

import Transferencia from "./src/pages/Transferencia"; // Importacao da Pagina Transferencia

import {
  TransferenciaConfirmacao,
  TransferenciaConclusao,
} from "./src/partials/Transferencia";

import Perfil from "./src/pages/Perfil"; // Importacao da Pagina Perfil

import Splash from "./src/components/Splash";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transferencia"
          component={Transferencia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransferenciaConfirmacao"
          component={TransferenciaConfirmacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransferenciaConclusao"
          component={TransferenciaConclusao}
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
