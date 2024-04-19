import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1, // Cobrir todo o espaço
    backgroundColor: "#F0EDE9",
    alignItems: "center", // Alinhar todos os items
    justifyContent: "center", // Justificar todo o conteudo
  },

  textos: {
    fontSize: 30,
    fontStyle: "italic",
    color: "#171A4A",
  },
  ImgLogo: {
    width: 300,
    height: 300,
  },
  caixauser: {
    width: "25%",
    height: 50,
    textAlign: "center",
    borderBottomWidth: 2,
    fontSize: 20,
    borderBottomColor: "#171A4A",
    marginTop: "1%",
  },
  caixasenha: {
    width: "25%",
    height: 50,
    textAlign: "center",
    borderBottomWidth: 2,
    fontSize: 20,
    borderBottomColor: "#171A4A",
    marginTop: "1%",
  },
  caixas: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "25%",
    height: "4%",
    borderRadius: 15,
    backgroundColor: "#171A4A",
    marginTop: "1%",
    justifyContent: "center",
    alignItems: "center",
  },
  textobtn: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#F0EDE9",
  },
  imagesicones:{
    width: 25,
    height: 25,
  },
});

export default Styles;
