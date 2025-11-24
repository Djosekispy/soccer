import { Ionicons } from "@expo/vector-icons";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import CalenderStyles from "./style";


export default function CalenderCarousel(){
  const [currentDate, setCurrentDate ] = useState<Dayjs>(dayjs())
  const [selectedDate, setSelectedDate ] = useState<Dayjs>(dayjs())
    
  const renderItem = ({item } : { item : Dayjs})=>{

    const isToday = 
    }
    
    
    return (
   <View style={CalenderStyles.container}>
    <TouchableOpacity>
  <Ionicons name="chevron-back" size={24} color="#fff"/>
    </TouchableOpacity>



       <TouchableOpacity>
         <Ionicons name="chevron-forward" size={24} color="#fff"/>
    </TouchableOpacity>
    </View>

    );
}