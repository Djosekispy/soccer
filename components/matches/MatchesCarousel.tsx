import React from "react";
import { FlatList, View } from "react-native";
import { MatchCard } from "./MatchCard";
import { matches } from "./data/matches";



export default function MatchesCarousel() {

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        horizontal
        data={matches}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id as unknown as string}
        renderItem={({ item }) => <MatchCard data={item} />}
      />
    </View>
  );
}
