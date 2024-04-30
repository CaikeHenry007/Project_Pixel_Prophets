import { View, ImageBackground, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { fetchData } from "../API/Api";

import Btn from "../components/ButtonComponent";
import Styles from "../styles/StyleSheet";
import LoginModal from "../partials/Login";
import CadastroModal from "../partials/Cadastro";

export default function First() {
  const [visibleA, setVisibleA] = useState(false);
  const [visibleB, setVisibleB] = useState(false);
  const navigation = useNavigation();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Adicione um estado para armazenar o erro

  useEffect(() => {
    // Chamando a função fetchData ao montar a tela
    fetchData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        setError(error); // Captura e armazena o erro no estado
      });
  }, []);

  // Verifica se ocorreu um erro de solicitação
  if (error) {
    return (
      <View style={Styles.errorContainer}>
        <Text style={Styles.errorText}>
          Ocorreu um erro ao carregar os dados da API.
        </Text>
        <Text style={Styles.errorText}>{error.message}</Text>
      </View>
    );
  }

  return (
    <View>
      <StatusBar />
      <ImageBackground
        source={require("../assets/images/Fundo1.png")}
        style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
      >
        <Text>Dados da API: {JSON.stringify(data)}</Text>
        <View style={Styles.firstFooter}>
          <Btn
            TouchStyle={[
              Styles.frtButtons,
              { backgroundColor: "#F5E2CF", marginRight: 10 },
            ]}
            letras={[Styles.firstButtons, { color: "#2F2C79" }]}
            children="Entrar"
            OnPress={() => setVisibleA(true)}
          />

          <Btn
            TouchStyle={[
              Styles.frtButtons,
              { backgroundColor: "#2F2C79", marginLeft: 10 },
            ]}
            letras={[Styles.firstButtons, { color: "#F5E2CF" }]}
            children="Criar conta"
            OnPress={() => setVisibleB(true)}
          />
        </View>

        <LoginModal visibleA={visibleA} OnPressCloseA={() => setVisibleA(false)} OnPress={() => {navigation.navigate("Home")}} />

        <CadastroModal visibleB={visibleB} OnPressCloseB={() => setVisibleB(false)}  OnPress={() => {navigation.navigate("Home")}} />
      </ImageBackground>
    </View>
  );
}
