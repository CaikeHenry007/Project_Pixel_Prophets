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

export default function CadastroModal({visible, OnPress}) {

  const fontes = useFonts({
    Prompt_400Regular,
  });

  return (
    <View>
          <Modal animationType="slide" transparent={true} visible={visible} >
      <View style={Styles.container}>
      <ImageProps
        source={require("../assets/images/LogoPB.png")}
        style={Styles.ImgLogo}
      />
      <Txt Texto="Faça login" TextStyle={Styles.textos} />
      <View style={Styles.caixas}>
        <ImageProps
          style={Styles.imagesicones}
          source={require("../assets/images/People.jpg")}
        />
        <InputProps InputStyle={Styles.caixauser} Placeholder="Usuário" />
      </View>
      <View style={Styles.caixas}>
        <ImageProps
          style={Styles.imagesicones}
          source={require("../assets/images/Cadeado.png")}
        />
        <InputProps InputStyle={Styles.caixasenha} Placeholder="Senha" />
        <Btn
              TouchStyle={[
                Styles.frtButtons,
                { backgroundColor: "#F5E2CF", marginRight: 10 },
              ]}
              letras={[Styles.firstButtons, { color: "#2F2C79" }]}
              children="Cadastrar"
              OnPress={OnPress}
            />
      </View>
    </View>
      </Modal>
    </View>
  );
}

