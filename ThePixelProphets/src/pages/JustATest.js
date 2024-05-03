import React, { useState } from 'react';
import { TextInput } from 'react-native';

const MyComponent = () => {
  const [formattedText, setFormattedText] = useState('');

  const handleTextChange = (text) => {
    // Remove caracteres não numéricos
    const cleanedText = text.replace(/[^0-9]/g, '');

    // Formata como CPF (###.###.###-##)
    if (cleanedText.length <= 11) {
      const cpf = cleanedText.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4'
      );
      setFormattedText(cpf);
    } else {
      // Formata como número de telefone (## #####-####)
      const phone = cleanedText.replace(
        /(\d{2})(\d{5})(\d{4})/,
        '$1 $2-$3'
      );
      setFormattedText(phone);
    }
  };

  return (
    <TextInput
      keyboardType="numeric"
      placeholder="Digite CPF ou número de telefone"
      value={formattedText}
      onChangeText={handleTextChange}
    />
  );
};

export default MyComponent;