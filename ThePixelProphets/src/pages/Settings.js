import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,

  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../styles/StyleSheet";
import Txt from "../components/TextComponent";
import ImageProps from "../components/ImageComponent";
import RdpComponente from "../components/RodapeComponent";

export default function Settings() {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={Styles.Header}>
        <View></View>
        <Txt
          Texto={"Olá, fulano"}
          TextStyle={{
            color: "white",
            fontSize: 30,
            marginLeft: 10,
            marginBottom: 10
          }}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", display: 'flex', flexDirection: 'column' }}> 
      
        <View style={Styles.quadradocontainer}>
      </View>
      
  
      <RdpComponente />
    </View>
    </View>
  );
}
