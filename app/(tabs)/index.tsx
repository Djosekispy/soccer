import { styles } from "@/styles/mainViewStyle";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

const loginIcon = require('../../assets/images/loginIcon.png')

export default function IndexPage(){

  const [ email, setEmail ] = useState<string>()

const onSubmit = ()=> {
  alert(email)
}

  return (
   <View style={styles.main} >
    <Text>SEJA BEM VINDO</Text>
    
      <Link href={"/(auth)"}>
        <Text>Voltar ao Login</Text>
      </Link>
  </View>
  );
}
