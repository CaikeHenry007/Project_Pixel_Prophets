import { TextInput } from "react-native";

export default function InputProps({
  InputStyle,
  Placeholder,
  TypeTeclado,
  onChangeText,
  value,
}) {
  return (
    <TextInput
      style={InputStyle}
      placeholder={Placeholder}
      keyboardType={TypeTeclado}
      onChangeText={onChangeText}
      value={value}
    />
  );
}
