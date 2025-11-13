import { styles } from "@/styles/mainViewStyle";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const loginIcon = require('../../assets/images/loginIcon.png')

export default function IndexPage(){

  return (
   <View style={styles.main} >
    <View style={styles.containerImage}>
      <Image  source={loginIcon} style={styles.image}/>
    </View>

    <Text>SEJA BEM VINDO</Text>

   <View style={styles.form}>
    <View style={[styles.form, { gap : 8}]}>
      <Text style={styles.text}>Email</Text>
      <TextInput placeholderTextColor='#595959' style={styles.input} placeholder="Digite o seu Email" />
    </View>

     <View style={[styles.form, { gap : 8, marginTop : 8}]}>
      <Text style={styles.text}>Senha</Text>
      <TextInput placeholderTextColor='#595959' style={styles.input} placeholder="Digite a sua senha" />
    </View>
   </View>
 <View style={[styles.form,{paddingHorizontal : 20, paddingTop : 8}]}>
  <Text style={styles.text}> Esqueceu senha ? </Text>
 </View>

  <TouchableOpacity style={styles.button}>
     <Text style={styles.textButton}>Entrar</Text>
  </TouchableOpacity>



  </View>
  );
}
