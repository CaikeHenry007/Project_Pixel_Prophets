import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RotasTabs from './BottomTabs.routes';

import Login from '../pages/Login'; // Importação da página Login

import Settings from '../pages/Configuracoes';

import Help from '../pages/Ajudaa';

import Perfil from '../pages/Perfil'; // Importacao da Pagina Perfil

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function RotasDrawer() {
  return (
      <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: { backgroundColor: '#171A4A' },
        drawerActiveBackgroundColor: '#F0EDE9',
        drawerActiveTintColor: '#171A4A',
        drawerInactiveBackgroundColor: '#171A4A',
        drawerInactiveTintColor: '#F0EDE9',
      }}
      >
        <Drawer.Screen
          name='Home'
          component={RotasTabs}
          options={{ headerTitle: 'Olá, Fulano', title: 'Home', headerStyle: { backgroundColor: "#171A4A"}, headerTintColor: "#F0EDE9",}}
        />
        <Drawer.Screen
          name='Perfil'
          component={Perfil}
          options={{ title: 'Perfil', headerStyle: { backgroundColor: "#171A4A"}, headerTintColor: "#F0EDE9",}}
        />
        <Drawer.Screen
          name='Configurações'
          component={Settings}
          options={{ title: 'Configurções', headerStyle: { backgroundColor: "#171A4A"}, headerTintColor: "#F0EDE9",}}
        />
        <Drawer.Screen
          name='Ajuda'
          component={Help}
          options={{ title: 'Ajuda', headerStyle: { backgroundColor: "#171A4A"}, headerTintColor: "#F0EDE9",}}
        />
      </Drawer.Navigator>
  );
}
