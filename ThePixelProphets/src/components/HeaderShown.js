import React, { useEffect, useState } from "react";
import {
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../styles/StyleSheet";
import Txt from "./TextComponent";
import ImageProps from "./ImageComponent";

export default function HeaderShown() {
  return (
      <View style={Styles.Header}>
        <View><ImageProps source={require('../assets/images/settings.png')} style={{width: 30, height: 30, marginBottom: 25, marginLeft: 10}}/></View>
        <Txt
          Texto={"Olá, Fulano"}
          TextStyle={{
            color: "white",
            fontSize: 30,
            marginLeft: 10,
            marginBottom: 10
          }}
        />
      </View>
  );
}