
import React, {useState} from 'react'
import { View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Btn from "../components/ButtonProps";

export default function First() {
  const useNavigation = useState('')
  return (
    <View>
      <StatusBar backgroundColor="#F0EDE9" style="auto"/>
      <View >
        <ImageBackground source={require("../assets/images/Fundo.png")} style={{ width: "100%", height: "100%", marginTop:"7%", }}>
          <View>
            <Btn
              
            />       
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
