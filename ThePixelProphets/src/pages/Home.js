import React, { useEffect, useState } from "react";
import { Button, Text, View, Alert, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../styles/StyleSheet";

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
          <Text>Bem vindo</Text>
          <Button onPress={() => navigation.navigate('Transferencia')} title="Fazer transferencia"/>
    </View>
  );
}
