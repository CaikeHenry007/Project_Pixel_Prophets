import { View, Modal, TextInput, Text } from "react-native";
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";

import Btn from "../components/ButtonComponent";
import Styles from "../styles/StyleSheet";
import ImageProps from "../components/ImageComponent";
import InputProps from "../components/InputComponent";

export default function LoginModal({ visible, OnPress }) {
  const fontes = useFonts({
    Prompt_400Regular,
  });

  return (
    <View style={Styles.fontes}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={Styles.section}>
          <ImageProps
            source={require("../assets/images/LogoPB.png")}
            style={Styles.ImgLogo}
          />

          <View style={Styles.formGroup}>
            <TextInput style={Styles.formInput} Placeholder="CPF" />
            <View style={{ backgroundColor: "#F0EDE9" }}>
              <Text style={Styles.formLabel}>CPF</Text>
            </View>
            <InputProps />
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
                { color: "#F0EDE9", fontFamily: "Prompt_400Regular" },
              ]}
              children="Entrar"
              OnPress={OnPress}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
