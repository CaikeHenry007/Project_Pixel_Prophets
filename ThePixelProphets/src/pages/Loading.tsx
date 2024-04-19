import React, { useEffect, useState } from "react";
import { Button, Text, View, Modal } from "react-native";

import Styles from "../styles/StyleSheet"; // Importacao do Styles
import Txt from "../components/TextProps"; // Importacao do Component Text
import ImageProps from "../components/ImageProps"; // Importacao do Componente Imagem

export default function Loading() {
  return (
    <View style={Styles.container}>
      <ImageProps
        source={require("../assets/images/LogoPB.png")}
        style={Styles.ImgLogo}
      />
      <Txt Texto="" TextStyle={Styles.textos} />
    </View>
  );
}
