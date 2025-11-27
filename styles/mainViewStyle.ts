import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : "#000"
  },
  containerImage : {
    width : 100,
    height : 100,
  },
  image : {
   width : '100%',
   height : '100%',
   resizeMode : 'cover'
  },
  form : {
    width : '100%',
    height: 'auto',
    paddingHorizontal : 12,
    gap: 8
  },
  input : {
    borderRadius : 12,
    backgroundColor : '#D9D9D9',
    height : 40,
    width : '100%',
    paddingLeft : 30,
    marginBottom : 12
  },
  button : {
    backgroundColor : "#E93B3B",
    padding : 10,
    width : 100,
    borderRadius : 12,
    marginTop : 12,
    justifyContent : 'center',
    alignItems : "center"
  },
  textButton : {
    fontWeight : "bold",
    fontSize : 14,
    color : "#fff",
    fontFamily : "Irish-Grover"
  },
  text : {
    color: "#fff",
    fontFamily : "Irish-Grover"
  }
})


export { styles };

