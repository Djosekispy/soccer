import { StyleSheet } from "react-native";

const IndexStyles  = StyleSheet.create({
    container : {
    backgroundColor : "#161616",
    flex : 1
    },
    header :  {
     flexDirection : "row",
     justifyContent : "space-between",
     width : "100%",
     paddingHorizontal : 12,
     paddingTop : 15
    },
    iconContent : {
        flexDirection : "row",
        gap : 20
    }
})

export default IndexStyles;