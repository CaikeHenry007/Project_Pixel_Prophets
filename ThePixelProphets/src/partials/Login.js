import { View, Modal, TextInput, Text, Pressable } from "react-native";

import Btn from "../components/ButtonComponent";
import Styles from "../styles/StyleSheet";
import ImageProps from "../components/ImageComponent";
import InputProps from "../components/InputComponent";

export default function LoginModal({ visibleA, OnPress, OnPressCloseA }) {

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visibleA}>
        <View style={Styles.section}>
          <View>
            <Pressable onPress={OnPressCloseA}>
              <ImageProps
                source={require("../assets/images/setinha.png")}
                style={{ margin: 20 }}
              />
            </Pressable>
          </View>
          <View style={{  justifyContent: "center", alignItems: "center", marginTop: "15%",}}>
            <ImageProps
              source={require("../assets/images/LogoBlue.png")}
              style={Styles.ImgLogo}
            />

            <View style={{ alignItems: "center", }} >
              <View style={Styles.formGroup} >
                <TextInput style={Styles.formInput} Placeholder="CPF" />
                <View style={{ backgroundColor: "#F0EDE9" }}>
                  <Text style={Styles.formLabel}>CPF</Text>
                </View>
              </View>
          
              <View style={Styles.formGroup}>
                <TextInput style={Styles.formInput} Placeholder="SENHA" />
                <View style={{ backgroundColor: "#F0EDE9" }}>
                  <Text style={Styles.formLabel}>SENHA</Text>
                </View>
              </View>

              <View style={Styles.formGroup}>
                <Btn
                  TouchStyle={[
                    Styles.frtButtons,
                    { backgroundColor: "#2F2C79", marginRight: 10 },
                  ]}
                  letras={[
                    Styles.firstButtons,
                    { color: "#F0EDE9" },
                  ]}
                  children="Entrar"
                  OnPress={OnPress}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}