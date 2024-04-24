import { TextInput } from "react-native";

export default function InputProps({
  InputStyle,
  Placeholder,
  TypeTeclado,
  onChangeText,
  value,
  secureTextEntry,
}) {
  return (
    <TextInput
      style={InputStyle}
      placeholder={Placeholder}
      keyboardType={TypeTeclado}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  );
}
