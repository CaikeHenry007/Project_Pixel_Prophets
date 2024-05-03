import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../styles/StyleSheet";
import Txt from "./TextComponent";
import ImageProps from "./ImageComponent";
import Btn from "./ButtonComponent";

export default function RdpComponent() {
  const navigation = useNavigation();

  return (
    <View style={Styles.Rodape}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>0
        <ImageProps
          style={Styles.IconsRdp}
          source={require("../assets/images/casahome.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
        <ImageProps
          style={Styles.IconsRdp}
          source={require("../assets/images/cartao.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Transferencia")}>
        <ImageProps
          style={Styles.IconsRdp}
          source={require("../assets/images/transferir.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Transferencia")}>
        <ImageProps
          style={Styles.IconsRdp}
          source={require("../assets/images/historico.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
