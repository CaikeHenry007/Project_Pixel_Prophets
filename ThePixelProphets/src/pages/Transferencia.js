import React, { useEffect, useState } from "react";
import { Button, View, Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RdpComponente from "../components/RodapeComponent";
import Txt from "../components/TextComponent";
import Btn from "../components/ButtonComponent";
import ImageProps from "../components/ImageComponent";
import InputProps from "../components/InputComponent";
import { TransferenciaConclusao } from "../partials/Transferencia";

import Styles from "../styles/StyleSheet";
import * as LocalAuthentication from "expo-local-authentication";

export default function Transferencia() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visible, setVisible] = useState(false); // Define visible state
  const [NumConta, setNumCont] = useState("");
  const [ValTransfe, setValTransfe] = useState("");
  const navigation = useNavigation();

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
        "Não foi encontrada a biometria. Insira a senha da sua conta",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("TransferenciaConfirmacao"),
          },
        ]
      );
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Coloque sua digital",
      fallbackLabel: "Erro, biometria incorreta",
    });
  }

  useEffect(() => {
    verifyAvailableAuthentication();
    handleAuthentication();
  }, []);

  function handleLogout() {
    setIsAuthenticated(false);
    navigation.navigate("Home");
  }

  return (
    <View style={Styles.container}>
      <ImageProps
        source={require("../assets/images/LogoBlue.png")}
        style={Styles.ImgLogo}
      />
      <Txt Texto="Faça uma Transferência" TextStyle={Styles.textos} />
      <InputProps
        InputStyle={Styles.caixauser}
        Placeholder="Insira o nome da conta"
        onChangeText={setNumCont}
        TypeTeclado="numeric"
      />
      <InputProps
        InputStyle={Styles.caixasenha}
        Placeholder="Insira o valor desejado"
        onChangeText={setValTransfe}
        TypeTeclado="numeric"
      />
      <Btn OnPress={() => setVisible(true)} TouchStyle={Styles.btn}>
        <Txt Texto="Continuar para revisão" TextStyle={Styles.textobtn} />
      </Btn>
      <Button title="Sair" onPress={handleLogout} />
      <TransferenciaConclusao
        visible={visible}
        NumeroConta={NumConta}
        ValorTransfe={ValTransfe}
        OnPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
