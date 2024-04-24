import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  Alert,
  Modal,
  Flatlist,
  Image,
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
      <View style={{ flex: 1 }}>
        <View style={Styles.quadradocontainer}>
          <ImageProps
            source={require("../assets/images/saldo.png")}
            style={{ width: 30, height: 30, marginLeft: 15, marginTop: 10 }}
          />
          <Text style={{ color: "white", marginLeft: 10, marginTop: 15 }}>
            Saldo Disponível:{" "}
          </Text>
          <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
            <Text style={{ color: "white" }}>R$ 28.000.00</Text>
          </View>
        </View>
        <Button
          onPress={() => navigation.navigate("Transferencia")}
          title="Fazer transferencia"
        />
      </View>
      <RdpComponente />
    </View>
  );
}
