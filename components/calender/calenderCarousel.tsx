import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { FlatList, View } from "react-native";
import CalenderStyles from "./style";
import CarouselButton from "./ui/CarrouselButton";
import RenderItem from "./ui/ItemRender";

export default function CalenderCarousel(){
  const [currentDate, setCurrentDate ] = useState<Dayjs>(dayjs())
  const [selectedDate, setSelectedDate ] = useState<Dayjs>(dayjs())
    
  const getDayOfWeek = ()=> {
    const startOfWeek = currentDate.startOf("week")
    return Array.from({length : 7}, (_,i) => startOfWeek.add(i,"day") );
  }

  const dates = getDayOfWeek();

  const goPrevWeek = ()=> setCurrentDate((prev) => prev.subtract(1,"week"));
   const goNextWeek = ()=> setCurrentDate((prev) => prev.add(1,"week"));

    return (
   <View style={CalenderStyles.container}>

  <CarouselButton iconName="chevron-back" onPress={goPrevWeek} />
    <FlatList 
    data={dates}
    keyExtractor={(item)=> item.format("DD-MM-YYYY")}
    renderItem={({item,index})=><RenderItem 
    key={index} item={item} 
    selectedDate={selectedDate} 
    setSelectedDate={setSelectedDate}/>}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{gap: 20}}
    />

         <CarouselButton iconName="chevron-forward" onPress={goNextWeek} />
    </View>

    );
}