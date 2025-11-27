import dayjs, { Dayjs } from "dayjs"
import { Text, TouchableOpacity, View } from "react-native"


interface RenderItemProps {
    item  :  Dayjs
    selectedDate : Dayjs
    setSelectedDate : (item : Dayjs)=>void
}


  export default function RenderItem ({item, selectedDate, setSelectedDate}:RenderItemProps){
    const isToday = item.isSame(dayjs(),"day")
    const isSelected = item.isSame(selectedDate,"day")

    return (
      <TouchableOpacity
      onPress={()=>setSelectedDate(item)}
      style={{alignItems: "center"}}
      >
        <Text
        style={
          {
            color: isSelected ? "#fff" : "#aaa",
            fontFamily: "Irish-Grover",
            fontSize: 13
          }
        }
        >
          {isToday ? "Today" : item.format("ddd")}
        </Text>
        <Text
         style={
          {
           color: isSelected ? "#fff" : "#ccc",
           fontFamily: "Irish-Grover",
           fontSize: 13
          }
        }
        >
          {item.format("DD MMM")}
        </Text>
       { isSelected && <View
        style={
          {
            height: 3,
            borderRadius: 3,
            width: "100%",
            backgroundColor: "#E93B3B"
          }
        }
        >

        </View>
  }
      </TouchableOpacity>
    )

    }