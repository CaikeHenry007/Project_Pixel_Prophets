import React, { useState, useEffect } from "react";
import { View, ImageBackground, Modal, TextInput, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";

import Btn from "../components/ButtonProps";
import Styles from "../styles/StyleSheet";
import ImageProps from "../components/ImageProps";
import Txt from "../components/TextProps";
import InputProps from "../components/TextInputProps";

export default function LoginModal({ visible, OnPress }) {
  const fontes = useFonts({
    Prompt_400Regular,
  });

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={Styles.container}>
          <ImageProps
            source={require("../assets/images/LogoPB.png")}
            style={Styles.ImgLogo}
          />

          <View style={Styles.section}>

            <View style={Styles.formGroup}>
              <TextInput Placeholder="CPF" />
              <Text style={Styles.formLabel} >CPF</Text>
            </View>

            <View style={Styles.formGroup}>
              <TextInput Placeholder="SENHA" />
              <Text style={Styles.formLabel} >CPF</Text>
            </View>

          </View>























          <View>
            <Btn
              TouchStyle={[
                Styles.frtButtons,
                { backgroundColor: "#F5E2CF", marginRight: 10 },
              ]}
              letras={[Styles.firstButtons, { color: "#2F2C79" }]}
              children="Entrar"
              OnPress={OnPress}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
