import React, { useEffect, useState } from "react";
import { Button, Text, View, Modal } from "react-native";

import Styles from "../styles/StyleSheet"; // Importacao do Styles
import Txt from "../components/TextProps"; // Importacao do Component Text
import ImageProps from "../components/ImageProps"; // Importacao do Componente Imagem
import InputProps from "../components/TextInputProps";

export default function Perfil() {
  return (
    <View style={Styles.container}>
      <ImageProps
        source={require("../assets/images/LogoPB.png")}
        style={Styles.ImgLogo}
      />
      <Txt Texto="Faça login" TextStyle={Styles.textos} />
      <InputProps InputStyle={Styles.caixauser} Placeholder="Usuário" />
      <InputProps InputStyle={Styles.caixasenha} Placeholder="Senha" />
    </View>
  );
}
