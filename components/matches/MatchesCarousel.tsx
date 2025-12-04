import ApiRequest from "@/config/axiosConfig";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { MatchCard } from "./MatchCard";
import { ApiResponse } from "./data/matches";

interface Props {
  macthDate : Date;
}

export default function MatchesCarousel({macthDate }:Props) {
  const [matches, setMatches] = useState<ApiResponse[]>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(false);

 const getMatchesFromApi = async ()=> {
  setIsLoading(true)
  try {
    const getMatches = await ApiRequest.get(`/competitions/2017/matches?dateFrom=${macthDate.toISOString().split("T")[0]}&dateTo=${macthDate.toISOString().split("T")[0]}`);
      setMatches(getMatches.data.matches);
  } catch (error) {
    console.log(JSON.stringify(error));
  }finally{
    setIsLoading(false)
  }
 }

 useEffect(()=>{
  getMatchesFromApi();
 },[macthDate])

  return (
    <View style={{ marginTop: 20 }}>
      {isLoading ? (
        <View style={{flex:1, justifyContent:"center", alignItems:"center", height:100, width:400}}>
          <ActivityIndicator size="large" color="#fff" />
          </View>
      ) : (
        <FlatList
        horizontal
        data={matches}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id as unknown as string}
        renderItem={({ item }) => <MatchCard 
          awayTeam={item.awayTeam.name}
           homeTeam={item.homeTeam.name}
           id={item.id}
           awayLogo={item.awayTeam.crest}
           homeLogo={item.homeTeam.crest}
           league={item.competition.name}
           leagueFlag={item.competition.emblem}
           scoreAway={item.score.fullTime.away}
          scoreHome={item.score.fullTime.home}
          time={item.status}
        />}
        ListEmptyComponent={()=><View style={{flex:1, justifyContent:"center", alignItems:"center", height:100, width:400}}> 
           <Text style={{color : "#fff", fontSize: 25, fontWeight: "700"}}>Sem Resultados !!</Text>
        </View>}
      />
      )}
    </View>
  );
}
