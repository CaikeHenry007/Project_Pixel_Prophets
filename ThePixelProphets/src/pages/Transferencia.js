import React, { useEffect, useState } from "react";
import { Button, View, Alert } from "react-native";
import { useNavigation, } from "@react-navigation/native";
import Txt from "../components/TextProps";
import Btn from "../components/ButtonProps";
import ImageProps from "../components/ImageProps";
import InputProps from "../components/TextInputProps";

import Styles from "../styles/StyleSheet";
import * as LocalAuthentication from "expo-local-authentication";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visible, setVisible] = useState(false); // Define visible state
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
        [{ text: "OK", onPress: () => navigation.navigate("TransferenciaConfirmacao") }]
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
        source={require("../assets/images/LogoPB.png")}
        style={Styles.ImgLogo}
      />
      <Txt Texto="Faça uma Transferência" TextStyle={Styles.textos} />
      <InputProps
        InputStyle={Styles.caixauser}
        Placeholder="Insira a chave pix"
      />
      <InputProps
        InputStyle={Styles.caixasenha}
        Placeholder="Insira um valor"
      />
      <Btn OnPress={() => alert("Apertou o botão!")} TouchStyle={Styles.btn}>
        <Txt Texto="Continuar para revisão" TextStyle={Styles.textobtn} />
      </Btn>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}
