import React from "react";
import { View, Text, StyleSheet } from "react-native";
import style from "./style";

export default function Title(){
    return(
        <View style={style.boxTitle}>
            <Text style={style.textTitle}>ONEBITHEALTH</Text>
        </View>
    );
    
}