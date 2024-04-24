import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1, // Cobrir todo o espaço
    backgroundColor: "white",
    alignItems: "center", // Alinhar todos os items
    justifyContent: "center", // Justificar todo o conteudo
  },

  containerTwo: {
    flex: 1,
    alignItems: "center",
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

  firstButtons: {
    textAlign: "center",
    fontSize: 18,
  },

  frtButtons: {
    width: 162,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
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
  imagesicones: {
    width: 25,
    height: 25,
  },
  firstFooter: {
    flexDirection: "row",
    position: "absolute",
    borderRadius: 15,
    height: 135,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    width: "100%",
    height: "18%",
    backgroundColor: "#171A4A",
  },
  Rodape: {
    width: "100%",
    height: "12%",
    backgroundColor: "#171A4A",
    flexDirection: 'row',
    alignItems: 'center',
  },
  quadradocontainer: {
    marginTop: 20,
    width: "80%",
    height: "30%",
    backgroundColor: "#171A4A",
  },
});

export default Styles;
