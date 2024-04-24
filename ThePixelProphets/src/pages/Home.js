import React, { useEffect, useState } from "react";
import { Button, Text, View, Alert, Modal, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../styles/StyleSheet";
import Txt from '../components/TextProps';
import ImageProps from '../components/ImageProps';
import Rodape from '../components/Rodape';

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View style={Styles.Header}>
        <View></View>
        <Txt Texto={'Olá, fulano'} TextStyle={{color: 'white', }}/>
      </View>
      <ScrollView>
      <View style={{flex: 1,}} >
          <View style={Styles.containerTwo} >
          <View style={Styles.quadradocontainer}>
          <Text>Seu saldo é R$1000 </Text>
          <Button onPress={() => navigation.navigate('Transferencia')} title="Fazer transferencia"/>
          </View>
          </View>
      </View>
      </ScrollView>
      <Rodape/>
    </View>
  );
}
