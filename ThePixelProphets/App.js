import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/pages/Login"; // Importação da página Login

import Home from "./src/pages/Home"; // Importacao da Pagina Home

import Transferencia from "./src/pages/Transferencia"; // Importacao da Pagina Transferencia

import Settings from './src/pages/Settings';

import {
  TransferenciaConfirmacao,
  TransferenciaConclusao,
} from "./src/partials/Transferencia";

import Perfil from "./src/pages/Perfil"; // Importacao da Pagina Perfil

import Splash from "./src/pages/Splash";

const Stack = createNativeStackNavigator();

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
