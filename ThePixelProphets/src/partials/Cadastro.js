import { View, Modal, TextInput, Text, Pressable } from "react-native";

import Btn from "../components/ButtonComponent";
import Styles from "../styles/StyleSheet";
import ImageProps from "../components/ImageComponent";
import InputProps from "../components/InputComponent";

export default function LoginModal({ visibleB, OnPress, OnPressCloseB }) {;
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visibleB}>
        <View style={Styles.section}>
          <View>
            <Pressable onPress={OnPressCloseB}>
              <ImageProps
                source={require("../assets/images/setinha.png")}
                style={{ marginTop: 20 }}
              />
            </Pressable>
          </View>
          <View style={{  justifyContent: "center", alignItems: "center", }}>
            <ImageProps
              source={require("../assets/images/LogoBlue.png")}
              style={Styles.ImgLogo}
            />

            <View style={{ alignItems: "center", }} >
              <View style={Styles.formGroup} >
                <TextInput style={Styles.formInput} Placeholder="NOME COMPLETO" />
                <View style={{ backgroundColor: "#F0EDE9" }}>
                  <Text style={Styles.formLabel}>NOME COMPLETO</Text>
                </View>
              </View>
          
              <View style={Styles.formGroup}>
                <TextInput style={Styles.formInput} Placeholder="CPF" />
                <View style={{ backgroundColor: "#F0EDE9" }}>
                  <Text style={Styles.formLabel}>CPF</Text>
                </View>
              </View>

              <View style={Styles.formGroup} >
                <TextInput style={Styles.formInput} Placeholder="E-MAIL" />
                <View style={{ backgroundColor: "#F0EDE9" }}>
                  <Text style={Styles.formLabel}>E-MAIL</Text>
                </View>
              </View>
          
              <View style={Styles.formGroup}>
                <TextInput style={Styles.formInput} Placeholder="SENHA" />
                <View style={{ backgroundColor: "#F0EDE9" }}>
                  <Text style={Styles.formLabel}>SENHA</Text>
                </View>
              </View>

              <View style={Styles.formGroup}>
                <TextInput style={Styles.formInput} Placeholder="CONFIRMAR SENHA" />
                <View style={{ backgroundColor: "#F0EDE9" }}>
                  <Text style={Styles.formLabel}>CONFIRMAR SENHA</Text>
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


{/*  */}