import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { MatchCard } from "./MatchCard";
import { ApiResponse } from "./data/matches";

interface Props {
  isLoading?: boolean;
  matches?: ApiResponse[];
}

export default function MatchesCarousel({isLoading,matches }:Props) {


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
           <Text style={{color : "#fff", fontSize: 18, fontFamily: "Irish-Grover"}}>No Results</Text>
        </View>}
      />
      )}
    </View>
  );
}
