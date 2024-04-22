import React, {useState, useEffect} from "react";
import { View, ImageBackground, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";

import Btn from "../components/ButtonProps";
import Styles from "../styles/StyleSheet";
import ImageProps from "../components/ImageProps";
import Txt from "../components/TextProps";
import InputProps from "../components/TextInputProps";
import LoginModal from "../partials/Login";
import CadastroModal from "../partials/Cadastro";

export default function Login() {

  const [visibleA, setVisibleA] = useState(false);

  const [visibleB, setVisibleB] = useState(false);

  const navigation = useNavigation();

  const fontes = useFonts({
    Prompt_400Regular,
  });

  return (
    <View style={{flex: 1,}}>
        <ImageBackground
          source={require("../assets/images/Fundo1.png")}
          style={{flex: 1,}}
        >
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
          <LoginModal visible={visibleA} OnPress={() => navigation.navigate("Home")} />
          <CadastroModal visible={visibleB} OnPress={() => setVisibleB(false)} />
        </ImageBackground>
      
      <StatusBar hidden={true} backgroundColor="#F0EDE9" />
    </View>
  );
}

