import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../pages/Home"; // Importacao da Pagina Home

import Transferencia from "../pages/Transferencia"; // Importacao da Pagina Transferencia

import {
  TransferenciaConfirmacao,
  TransferenciaConclusao,
} from "../partials/Transferencia";

const Tab = createBottomTabNavigator();

export default function RotasTabs() {
  return (
      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Transferencia"
          component={Transferencia}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="TransferenciaConfirmacao"
          component={TransferenciaConfirmacao}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="TransferenciaConclusao"
          component={TransferenciaConclusao}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
  );
}
