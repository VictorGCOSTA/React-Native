import React, {useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import ResultIMC from "./ResultIMC/Index";
import style from "./style";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Digite o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("CALCULAR")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))

    }

    function validationIMC(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("CALCULAR")
        setMessageIMC("Digite o peso e a altura")
    }

    return(
        <View style={style.FormContext}>
            <View style={style.form}>
                <Text style={style.formLabel}>Altura</Text>
                <TextInput
                style={style.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"
                ></TextInput>
                <Text style={style.formLabel}>Peso</Text>
                <TextInput
                style={style.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 80.506"
                keyboardType="numeric"
                ></TextInput>
                <TouchableOpacity
                style={style.ButtonCalculator}
                title={textButton}
                onPress={() => validationIMC()}>
                    <Text style={style.textbuttonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
            </View>
            <ResultIMC messageresultIMC={messageIMC} resultIMC={imc}/>
        </View>
    )
}