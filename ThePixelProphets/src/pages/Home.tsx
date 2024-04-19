import React, { useEffect, useState } from "react";
import { Button, Text, View, Alert, Modal } from "react-native";
import styles from "../styles/StyleSheet";
import * as LocalAuthentication from "expo-local-authentication";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visible, setVisible] = useState(false);

  async function verifyAvailableAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible);

    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(
      types.map((type) => LocalAuthentication.AuthenticationType[type])
    );
  }

  async function handleAuthentication() {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    console.log(isBiometricEnrolled);

    if (!isBiometricEnrolled) {
      return Alert.alert(
        "Login",
        "Não foi encontrada a biometria. Por favor, cadastre uma no dispositivo."
      );
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Coloque sua digital",
      fallbackLabel: "Erro, biometria incorreta",
    });

    if (auth.success) {
      setIsAuthenticated(true);
    }
    setVisible(auth.success);
  }

  function handleModalClose() {
    setIsAuthenticated(false);
    setVisible(false);
  }

  useEffect(() => {
    verifyAvailableAuthentication();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={Styles.textos}>
        Usuário conectado: {isAuthenticated ? "true" : "false"}
      </Text>
      <Button title="Entrar" onPress={handleAuthentication} />
      <Modal visible={visible} onRequestClose={handleModalClose}>
        <View>
          <Text>Bem vindo</Text>
          <Button title="voltar" onPress={() => setVisible(false)} />
          <Button title="Sair" onPress={handleModalClose} />
        </View>
      </Modal>
    </View>
  );
}
