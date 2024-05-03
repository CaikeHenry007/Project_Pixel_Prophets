import { StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function Splash() {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{name: "Login"}]
      }))
    }, 5000);
  }, [])

  return (
      <Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={require("../../assets/Splash1.mp4")}
        isLooping={true}
        shouldPlay={true}
      />
  );
}