import React from "react";
import { Image, Text, View } from "react-native";
import { Match } from "./data/matches";



export const MatchCard = ({ awayLogo,awayTeam,homeLogo,homeTeam,id,league,leagueFlag,scoreAway,scoreHome,time} : Match) => {
  return (
    <View
      style={{
        width: 220,
        backgroundColor: "#111",
        borderRadius: 16,
        padding: 14,
        marginHorizontal: 14,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: leagueFlag }}
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
        <Text style={{  fontFamily:"Irish-Grover", color: "#ccc", fontSize: 12 }}>{league.slice(0,14)}</Text>

        <View
          style={{
            marginLeft: "auto",
            backgroundColor: "#E8FFE8",
            paddingHorizontal: 8,
            paddingVertical: 2,
            borderRadius: 12,
          }}
        >
          <Text style={{  fontFamily:"Irish-Grover", color: "#2EAD2E", fontSize: 12 }}>{String(time)}</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center", width: "35%" }}>
          <Image
            source={{ uri: homeLogo }}
            style={{ width: 38, height: 38, marginBottom: 6 }}
          />
          <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 12, textAlign: "center" }}>
            {homeTeam}
          </Text>
        </View>

        <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 20 }}>
          {scoreHome} - {scoreAway}
        </Text>

        <View style={{ alignItems: "center", width: "35%" }}>
          <Image
            source={{ uri: awayLogo }}
            style={{ width: 38, height: 38, marginBottom: 6 }}
          />
          <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 12, textAlign: "center" }}>
            {awayTeam}
          </Text>
        </View>
      </View>

    </View>
  );
};
