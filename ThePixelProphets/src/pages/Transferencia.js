import React, { useEffect, useState } from "react";
import { Button, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";


import Styles from "../styles/StyleSheet"; // Importacao do Styles
import Txt from "../components/TextProps"; // Importacao do Component Text
import ImageProps from "../components/ImageProps"; // Importacao do Componente Imagem
import InputProps from "../components/TextInputProps";
import Btn from "../components/ButtonProps";

export default function Transferencia() {
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
    </View>
  );
}
