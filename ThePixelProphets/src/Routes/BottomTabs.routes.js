import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../pages/Home"; // Importacao da Pagina Home

import Transferencia from "../pages/Transferencia"; // Importacao da Pagina Transferencia

import {
  TransferenciaConfirmacao,
  TransferenciaConclusao,
} from "../partials/Transferencia";

import Perfil from "../pages/Perfil"; // Importacao da Pagina Perfil

import Splash from "../pages/Splash";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function RotasTabs() {
  return (
      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ 
            headerShown: false,
            tabBarStyle: {backgroundColor: '#171A4A'},
            tabBarActiveTintColor: '#F0EDE9', 
            tabBarLabel: "",
            tabBarIcon: () => {
              return <FontAwesome margim size={30} color="#F0EDE9" name="home"/>;
            },}}
        />
        <Tab.Screen
          name="Transferencia"
          component={Transferencia}
          options={{ 
            headerShown: false, 
            tabBarStyle: {backgroundColor: '#171A4A'}, 
            tabBarActiveTintColor: '#F0EDE9',
            tabBarLabel: "",
            tabBarIcon: () => {
              return <FontAwesome margim size={30} color="#F0EDE9" name="envelope" icon="fa-sharp fa-regular fa-money-bill-transfer"/>
            },}}
        />
        <Tab.Screen
          name="TransferenciaConfirmacao"
          component={TransferenciaConfirmacao}
          options={{ 
            headerShown: false, 
            tabBarStyle: {backgroundColor: '#171A4A'}, 
            tabBarActiveTintColor: '#F0EDE9',
            tabBarLabel: "",
            tabBarIcon: () => {
              return <FontAwesome margim size={30} color="#F0EDE9" name="envelope"/>;
            },}}
        />
        <Tab.Screen
          name="TransferenciaConclusao"
          component={TransferenciaConclusao}
          options={{ 
            headerShown: false, 
            tabBarStyle: {backgroundColor: '#171A4A'}, 
            tabBarActiveTintColor: '#F0EDE9',
            tabBarLabel: "",
            tabBarIcon: () => {
              return <FontAwesome margim size={30} color="#F0EDE9" name="envelope"/>;
            },}}
        />
      </Tab.Navigator>
  );
}
