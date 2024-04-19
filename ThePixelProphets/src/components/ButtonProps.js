import { TouchableOpacity } from "react-native";

export default function Btn({
  children,
  TouchStyle,
  OnPress,
}) {
  return (
    <TouchableOpacity onPress={OnPress} style={TouchStyle}>
      {children}
    </TouchableOpacity>
  );
}
