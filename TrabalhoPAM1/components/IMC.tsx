import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function IMC(){
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');

    const calcularIMC = () =>{
        const p = parseFloat(peso);
        const a = parseFloat(altura);
        if(p > 0 && a > 0){
            const resultado = p / (a * a);
            setImc(String(resultado));
        };
    }

    return(
        <View>
            <Text>Peso:</Text>
            <TextInput value={peso} onChangeText={setPeso}/>
            <Text>Altura:</Text>
            <TextInput value={altura} onChangeText={setAltura}/>
            <Button title="Calcular IMC" onPress={calcularIMC}/>
            {imc && <Text>IMC: {imc}</Text>}
        </View>
    );
}