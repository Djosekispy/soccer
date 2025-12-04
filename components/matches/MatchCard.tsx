import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Match } from "./data/matches";

interface Props {
  data: Match;
}

export const MatchCard = ({ data } : Props) => {
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
      {/* Header - Liga e bandeira */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: data.leagueFlag }}
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
        <Text style={{  fontFamily:"Irish-Grover", color: "#ccc", fontSize: 12 }}>{data.league}</Text>

        <View
          style={{
            marginLeft: "auto",
            backgroundColor: "#E8FFE8",
            paddingHorizontal: 8,
            paddingVertical: 2,
            borderRadius: 12,
          }}
        >
          <Text style={{  fontFamily:"Irish-Grover", color: "#2EAD2E", fontSize: 12 }}>{data.time}</Text>
        </View>
      </View>

      {/* Placar */}
      <View
        style={{
          marginTop: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Home */}
        <View style={{ alignItems: "center", width: "35%" }}>
          <Image
            source={{ uri: data.homeLogo }}
            style={{ width: 38, height: 38, marginBottom: 6 }}
          />
          <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 12, textAlign: "center" }}>
            {data.homeTeam}
          </Text>
        </View>

        {/* Score */}
        <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 20 }}>
          {data.scoreHome} - {data.scoreAway}
        </Text>

        {/* Away */}
        <View style={{ alignItems: "center", width: "35%" }}>
          <Image
            source={{ uri: data.awayLogo }}
            style={{ width: 38, height: 38, marginBottom: 6 }}
          />
          <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 12, textAlign: "center" }}>
            {data.awayTeam}
          </Text>
        </View>
      </View>

      {/* Botão */}
      <TouchableOpacity
        style={{
          marginTop: 16,
          backgroundColor: "#FF4B7D",
          paddingVertical: 8,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "600",
            fontFamily:"Irish-Grover"
          }}
        >
          Details
        </Text>
      </TouchableOpacity>
    </View>
  );
};
