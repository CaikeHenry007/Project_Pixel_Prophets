import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import RotasTabs from "./BottomTabs.routes";

import Login from "../pages/Login"; // Importação da página Login

import Transferencia from "../pages/Transferencia"; // Importacao da Pagina Transferencia

import Settings from '../pages/Settings';

import {
  TransferenciaConfirmacao,
  TransferenciaConclusao,
} from "../partials/Transferencia";

import Perfil from "../pages/Perfil"; // Importacao da Pagina Perfil

import Splash from "../pages/Splash";

const Drawer = createDrawerNavigator();

export default function RotasDrawer() {
  return (
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "white" },
        drawerActiveBackgroundColor: "black",
        drawerActiveTintColor: "white",

        drawerInactiveBackgroundColor: "white",
        drawerInactiveTintColor: "black",
      }}
      >
        <Drawer.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false, }}
          
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Home"
          component={RotasTabs}
          options={{
            title: 'Olá fulano'
          }}
        />
        <Drawer.Screen
          name="Transferencia"
          component={Transferencia}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="TransferenciaConfirmacao"
          component={TransferenciaConfirmacao}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="TransferenciaConclusao"
          component={TransferenciaConclusao}
          options={{ headerShown: false, drawerContent: () => null }}
        />
        <Drawer.Screen
          name="Perfil"
          component={Perfil}
        />
      </Drawer.Navigator>
  );
}
