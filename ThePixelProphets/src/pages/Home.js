import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  Alert,
  Modal,
  Flatlist,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../styles/StyleSheet";
import Txt from "../components/TextComponent";
import ImageProps from "../components/ImageComponent";
import RdpComponente from "../components/RodapeComponent";

export default function Home() {
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
            textAlign: "flex-start",
            marginLeft: 10,
          }}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={Styles.quadradocontainer}>
          <View style={{flexDirection: 'row',}} >
          <ImageProps
            source={require("../assets/images/saldo.png")}
            style={{ width: 30, height: 30, marginLeft: 15, marginTop: 10 }}
          />
          <Text style={{ color: "white", marginLeft: 10, marginTop: 15 }}>
            Saldo Disponível:{" "}
          </Text>
          </View>
          <View
            style={{
              width: '98%',
              marginTop: 30,
              marginLeft:'2%',
            }}
          >
            <Text style={{ color: "white", fontSize: 30}}>R$ 28.000,00</Text>
        </View>
          </View>

      </View>
      <RdpComponente />
    </View>
  );
}
