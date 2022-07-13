import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from "./ResultIMC/Index";

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
        setTextButton("Calcular")
        setMessageIMC("Digite o peso e a altura")
    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"
                ></TextInput>
                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 80.506"
                keyboardType="numeric"
                ></TextInput>
                <Button 
                title={textButton}
                onPress={() => validationIMC()}></Button>
            </View>
            <ResultIMC messageresultIMC={messageIMC} resultIMC={imc}/>
        </View>
    )
}