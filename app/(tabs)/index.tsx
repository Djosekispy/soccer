import logo from "@/assets/images/logo.png";
import CalenderCarousel from "@/components/calender/calenderCarousel";
import ScoreCarousel from "@/components/competition/ScoreCarousel";
import MatchesCarousel from "@/components/matches/MatchesCarousel";
import UpcomingCarousel from "@/components/matches/upcomingCarousel";
import useCompetition from "@/hooks/competition/useCompetition";
import useMatches from "@/hooks/matches/useMatches";
import IndexStyles from "@/styles/home-index/styles";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from '@react-native-picker/picker';
import React, { useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

enum tabsEmun {
  upcoming = "upcoming",
  score = "score",
  favorites = "favorites",
}

export default function IndexPage(){
 const { fetchAllMatches,fetchMatchByDate,setCompetitionId,fetchMatchLive,isLoading,matches,upcomingMatches } = useMatches();
 const {competitionId,setCompetionId, competitions,fetchAllCompetitions,fetchCompetitionById,fetchScoreCompetitionById,score,standing } = useCompetition();
 const [tab, setTabs] = useState<tabsEmun>(tabsEmun.upcoming);
 const pickerRef = useRef<any>(null);

 const close = ()=>{
  pickerRef.current.blur();
}

  return (
   <View style={IndexStyles.container}>
   <View style={IndexStyles.header}>
    <Image source={logo} />
      <View style={IndexStyles.iconContent}>
     <Ionicons name="search-outline" size={24} color="#fff" />
     <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>
   </View>
   <CalenderCarousel setMatchDate={fetchMatchByDate} />
    <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingHorizontal: 14}}>
      <TouchableOpacity onPress={fetchMatchLive}>
      <Text style={{fontWeight: "700", fontSize: 18, fontFamily:"Irish-Grover", color:"#fff"}}>Live Now</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fetchAllMatches}>
      <Text style={{fontWeight: "700", fontSize: 14, fontFamily:"Irish-Grover", color:"#F63D68"}}>See More</Text>
      </TouchableOpacity>
      
    </View>
     <MatchesCarousel  isLoading={isLoading} matches={matches}/>
<ScrollView style={{width: "100%", flex:1, marginTop: 20}}>
  
     <View style={{width: "100%", flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 30, paddingHorizontal: 14}}>
      <TouchableOpacity onPress={()=>setTabs(tabsEmun.upcoming)} style={{alignItems: "center", borderBottomWidth: 2, flexGrow: 1, borderBottomColor: tab == tabsEmun.upcoming ? "#F63D68" : "transparent", paddingBottom: 6}}>
        <Text style={{color :  tabsEmun.upcoming == tab ? "#fff" : "#5D5C64",fontFamily:"Irish-Grover"}}>Upcoming</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>setTabs(tabsEmun.score)} style={{alignItems: "center",borderBottomWidth: 2,flexGrow: 1, borderBottomColor: tab == tabsEmun.score ? "#F63D68" : "transparent", paddingBottom: 6}}>
        <Text style={{color :  tabsEmun.score == tab ? "#fff" : "#5D5C64", fontFamily:"Irish-Grover"}}>Score</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>setTabs(tabsEmun.favorites)} style={{alignItems: "center",borderBottomWidth: 2, flexGrow: 1,borderBottomColor: tab == tabsEmun.favorites ? "#F63D68" : "transparent", paddingBottom: 6}}>
        <Text style={{color :  tabsEmun.favorites == tab ? "#fff" : "#5D5C64",fontFamily:"Irish-Grover"}}>Favorites</Text>
      </TouchableOpacity>
     </View>

         <View style={{ flexDirection: "row", alignItems: "center" , width:"100%", paddingHorizontal: 14, marginVertical: 10}}>
              <Image
                source={{ uri: upcomingMatches && upcomingMatches[0]?.competition.emblem }} 
                style={{ width: 30, height: 30, marginRight: 8 }}
              />
              <Text style={{  fontFamily:"Irish-Grover", color: "#ccc", fontSize: 14 }}>{upcomingMatches && upcomingMatches[0]?.competition.name}</Text>
      
              <View
                style={{
                  marginLeft: "auto",
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                }}
              >
             <Picker 
            mode="dialog"
            dropdownIconColor="#fff"
            selectionColor="#5D5C64"
            style={{
              width: 40,
              height: 20,
              backgroundColor: "transparent",
              borderRadius: 10,
              paddingHorizontal: 8,
              borderWidth: 1,
              borderColor: "#E0E0E0",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2, 
            }}
      selectedValue={setCompetionId}
      onValueChange={(itemValue) =>{
        setCompetionId(itemValue as any)
        setCompetitionId(itemValue as any)
      }
      }
    >
  {competitions.length > 0 &&
    competitions.map((item, index) => (
      <Picker.Item
      color={(competitionId == item.id) || (competitionId == item.code) ? "#111" : "#5D5C64"}
        key={index}
        label={item.name}
        value={item.code || item.id}
      />
    ))}
</Picker>

                   </View>
            </View>

     {tab == tabsEmun.upcoming && <UpcomingCarousel matches={upcomingMatches} />}
      {tab == tabsEmun.score && <ScoreCarousel Scores={score} />}
</ScrollView>
  </View>
  );
}
