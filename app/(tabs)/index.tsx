import logo from "@/assets/images/logo.png";
import CalenderCarousel from "@/components/calender/calenderCarousel";
import MatchesCarousel from "@/components/matches/MatchesCarousel";
import IndexStyles from "@/styles/home-index/styles";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";


export default function IndexPage(){


  return (
   <View style={IndexStyles.container}>
   <View style={IndexStyles.header}>
    <Image source={logo} />
      <View style={IndexStyles.iconContent}>
     <Ionicons name="search-outline" size={24} color="#fff" />
     <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>
   </View>
   <CalenderCarousel />
    <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingHorizontal: 14}}>
      <TouchableOpacity>
      <Text style={{fontWeight: "700", fontSize: 18, fontFamily:"Irish-Grover", color:"#fff"}}>Live Now</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{fontWeight: "700", fontSize: 14, fontFamily:"Irish-Grover", color:"#F63D68"}}>See More</Text>
      </TouchableOpacity>
      
    </View>
     <MatchesCarousel />
  </View>
  );
}
