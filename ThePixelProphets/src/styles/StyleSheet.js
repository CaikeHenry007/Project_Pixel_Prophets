import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1, // Cobrir todo o espaço
      backgroundColor: '#F0EDE9',  
      alignItems: 'center', // Alinhar todos os items 
      justifyContent: 'center', // Justificar todo o conteudo
    },

    textos: {
      fontSize: 30,
      fontStyle: "italic",
      fontWeight: "bold",
      color: "#171A4A",
    },
    ImgLogo: {
      width: 300,
      height: 300
    }
  });
  
export default Styles