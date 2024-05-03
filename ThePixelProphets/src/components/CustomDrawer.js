import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Cabeçalho Personalizado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Perfil")}>
          <Image
            source={require("../assets/images/Logo1.png")}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bem-vindo!</Text>
      </View>

      {/* Itens do Menu Personalizados */}
      <DrawerItemList {...props} labelStyle={styles.drawerItemLabel} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 30,
    color: "#fff",
  },
  drawerItemLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 0, // Redefinindo o espaçamento padrão
  },
});