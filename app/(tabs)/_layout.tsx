import { Feather } from "@expo/vector-icons";
import Foundation from '@expo/vector-icons/Foundation';
import { Tabs } from "expo-router";

export default function LayoutTabs (){

  return (
    <Tabs
    screenOptions={{
      headerShown : false,
      tabBarActiveTintColor : "#F63D68",
      tabBarInactiveTintColor : "#667085",
    }}
    >
      <Tabs.Screen 
      options={{
        tabBarLabel : "Início",
        tabBarIcon : ({ color, size, focused }) => (
        <Foundation name="home" size={size} color={focused ? "#F63D68" : "#667085"} />
      ),
      }}
      name="index"  />

            <Tabs.Screen 
      options={{
        tabBarLabel : "Usuario",
        tabBarIcon : ({ color, size, focused }) => (
        <Feather name="user" size={size} color={focused ? "#F63D68" : "#667085"} />
      ),
      }}
      name="user"  />
    </Tabs>
  );
}