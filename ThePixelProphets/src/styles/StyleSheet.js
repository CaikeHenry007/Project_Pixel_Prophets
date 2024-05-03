import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1, // Cobrir todo o espaço
    backgroundColor: '#F0EDE9',
    alignItems: 'center', // Alinhar todos os items
    justifyContent: 'center', // Justificar todo o conteud
  },

  containerTwo: {
    flex: 1,
    borderWidth: 2,
  },

  textos: {
    fontSize: 17,
    paddingBottom: 20,
    color: '#2F2C79',
    marginBottom: 40,
 },

  ImgLogo: {
    width: 200,
    height: 200,
  },

  firstButtons: {
    textAlign: 'center',
    fontSize: 18,
  },

  frtButtons: {
    width: 162,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
  },

  caixauser: {
    width: '25%',
    height: 50,
    textAlign: 'center',
    borderBottomWidth: 2,
    fontSize: 20,
    borderBottomColor: '#171A4A',
    marginTop: '1%',
  },
  caixasenha: {
    width: '25%',
    height: 50,
    textAlign: 'center',
    borderBottomWidth: 2,
    fontSize: 20,
    borderBottomColor: '#171A4A',
    marginTop: '1%',
  },
  caixas: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '25%',
    height: '4%',
    borderRadius: 15,
    backgroundColor: '#171A4A',
    marginTop: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textobtn: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#F0EDE9',
  },
  imagesicones: {
    width: 25,
    height: 25,
  },
  firstFooter: {
    flexDirection: 'row',
    position: 'absolute',
    borderRadius: 15,
    height: 135,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    width: '100%',
    height: '18%',
    backgroundColor: '#171A4A',
    justifyContent: 'flex-end',
  },
  Rodape: {
    width: '100%',
    height: '12%',
    backgroundColor: '#171A4A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconsRdp: {
    width: 30,
    height: 30,
    margin: 18,
  },
  quadradocontainer: {
    marginTop:"3%",
    width: '95%',
    height: '25%',
    backgroundColor: '#171A4A',
    display: 'flex',
    borderRadius: 10
  },
  quadradocontainer2: {
  
    marginTop: 20,
    width: '35%',
    height: '15%',
    backgroundColor: '#000020',
    display: 'flex',
    borderRadius: 10,
    alignItems: 'center',
   justifyContent: 'center',
    marginLeft: 15,
  },

  section:{
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#F0EDE9',
  },

  formInput: {
    padding: 10,
    borderRadius: 5,
    width: 300,
    borderWidth: 2,
    borderColor: '#2F2C79',
    backgroundColor: '#2F2C7900',
    color: '#2F2C79',
  },

  formLabel:{
    position: 'absolute',
    backgroundColor: '#F0EDE9',
    marginTop: -60,
    marginLeft: 10,
    paddingRight: 10,
    paddingLeft: 10,
    color: '#2F2C79',
  
    },
  
  formGroup: {
    marginBottom: 40,
  }
});



export default  Styles

