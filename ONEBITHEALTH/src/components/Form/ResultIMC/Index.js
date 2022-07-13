import React from "react";
import { View, Text } from "react-native";


export default function ResultIMC(props){
    return(
        <View>
            <Text>{props.messageresultIMC}</Text>
           <Text>{props.resultIMC}</Text>
           
        </View>
    )
}