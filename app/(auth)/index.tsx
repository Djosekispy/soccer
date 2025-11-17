import { Button } from "@/components/button/Button";
import { styles } from "@/styles/mainViewStyle";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

const loginIcon = require('../../assets/images/loginIcon.png')

export default function IndexPage(){
 const router = useRouter();
  const [ email, setEmail ] = useState<string>()

const onSubmit = ()=> {
  router.push("/(tabs)")
}

  return (
   <View style={styles.main} >
    <View style={styles.containerImage}>
      <Image  source={loginIcon} style={styles.image}/>
    </View>

    <Text>SEJA BEM VINDO</Text>

   <View style={styles.form}>
    <View style={[styles.form, { gap : 8}]}>
      <Text style={styles.text}>Email</Text>
      <TextInput 
      onChangeText={(text) => setEmail(text)}
      placeholderTextColor='#595959' style={styles.input} placeholder="Digite o seu Email" />
    </View>

     <View style={[styles.form, { gap : 8, marginTop : 8}]}>
      <Text style={styles.text}>Senha</Text>
      <TextInput
       placeholderTextColor='#595959' style={styles.input} placeholder="Digite a sua senha" />
    </View>
   </View>
 <View style={[styles.form,{paddingHorizontal : 20, paddingTop : 8}]}>
  <Text style={styles.text}> Esqueceu senha ? </Text>
 </View>

  <Button text="Entrar" onPress={onSubmit} />



  </View>
  );
}
