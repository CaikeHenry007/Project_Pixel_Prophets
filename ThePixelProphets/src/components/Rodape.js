import React, { useEffect, useState } from "react";
import { Button, Text, View, Alert, Modal, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../styles/StyleSheet";
import Txt from './TextProps';
import ImageProps from './ImageProps'
import Btn from './ButtonProps';

export default function Rodape() {

  const navigation = useNavigation();

  return (
      <View style={Styles.Rodape} >
        <Btn></Btn>
      </View>
  );
}
