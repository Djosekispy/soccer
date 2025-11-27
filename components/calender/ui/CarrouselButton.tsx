import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface CarouselButtonProps {
 onPress : ()=>void;
 iconName : keyof typeof Ionicons.glyphMap
}


export default function CarouselButton({ onPress, iconName} : CarouselButtonProps){

    return(
          <TouchableOpacity onPress={onPress}>
          <Ionicons name={iconName} size={24} color="#fff"/>
            </TouchableOpacity>
    )
}