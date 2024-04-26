import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  Alert,
  Modal,
  FlatList,
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

  const data = [
    {
      key: '1',
      image: require("../assets/images/pagar.png"),
      text: 'Pagar',
    },
    {
      key: '2',
      image: require("../assets/images/transferirbranco.png"),
      text: 'Transferir',
    },
    {
      key: '3',
      image: require("../assets/images/extratos.png"),
      text: 'Extrato',
    },
    {
      key: '4',
      image: require("../assets/images/extratos.png"),
      text: 'Poupança',
    },
    
  ];

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
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={Styles.quadradocontainer}>
          <View style={{ flexDirection: "row" }}>
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
              width: "98%",
              marginTop: 30,
              marginLeft: "2%",
            }}
          >
            <Text style={{ color: "white", fontSize: 30 }}>R$ 28.000,00</Text>
          </View>
        </View>

        <FlatList
          data={data}
          horizontal
          renderItem={({ item }) => (
            <View style={[Styles.quadradocontainer2, {width: 150, height: 100}]}>
              <View style={{ flexDirection: "row" }}>
                <ImageProps
                  source={item.image}
                  style={{ width: 30, height: 30, marginTop: 10, }}
                />
              </View>
              <Text style={{color: 'white', textAlign: 'center',  fontSize: 20, marginBottom: 10, marginTop: 10}}>{item.text}</Text>
            </View>
          )}
        />
        <View style={{width: '100%', height: 10, backgroundColor: '#171A4A' }}></View>
      </View>

      <RdpComponente />
    </View>
  );
}
