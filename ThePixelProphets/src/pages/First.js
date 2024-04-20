import { View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import { useFonts, Prompt_400Regular } from "@expo-google-fonts/prompt";

import Btn from "../components/ButtonProps";
import Styles from "../styles/StyleSheet";

export default function First() {
  const navigation = useNavigation();

  const fontes = useFonts({
    Prompt_400Regular,
  });

  return (
    <View>
      <StatusBar backgroundColor="#F0EDE9" style="auto" />
      <View>
        <ImageBackground
          source={require("../assets/images/Fundo1.png")}
          style={{ width: "100%", height: "100%", marginTop: "7%" }}
        >
          <View style={Styles.firstFooter}>
            <Btn
              TouchStyle={[
                Styles.frtButtons,
                { backgroundColor: "#F5E2CF", marginRight: 10 },
              ]}
              letras={[Styles.firstButtons, { color: "#2F2C79" }]}
              children="Entrar"
              OnPress={() => navigation.navigate("Transferencia")}
            />

            <Btn
              TouchStyle={[
                Styles.frtButtons,
                { backgroundColor: "#2F2C79", marginLeft: 10 },
              ]}
              letras={[Styles.firstButtons, { color: "#F5E2CF" }]}
              children="Criar conta"
              OnPress={() => navigation.navigate("Transferencia")}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}