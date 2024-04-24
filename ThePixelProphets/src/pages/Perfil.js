import React, { useEffect, useState } from "react";
import { Button, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Styles from "../styles/StyleSheet"; // Importacao do Styles
import Txt from "../components/TextComponent"; // Importacao do Component Text
import ImageProps from "../components/ImageComponent"; // Importacao do Componente Imagem
import InputProps from "../components/InputComponent"; // Importação do Componente Text Input

export default function Perfil() {
  return (
    <View style={Styles.container}>
      <ImageProps
        source={require("../assets/images/LogoBlue.png")}
        style={Styles.ImgLogo}
      />
      <Txt Texto="Seu perfil" TextStyle={Styles.textos} />
    </View>
  );
}
