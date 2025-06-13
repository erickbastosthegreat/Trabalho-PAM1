import React, {useState} from "react";
import * as ImagePicker from 'expo-image-picker';
import { View, Text, TextInput, Button, Image } from "react-native";

export default function Perfil(){
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState<string | null>(null);

    const escolherImagem = async() =>{
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if(!resultado.canceled && resultado.assets.length > 0){
            setImagem(resultado.assets[0].uri);
        }
    };

    return(
        <View>
            <Text>Nome:</Text>
            <TextInput value={nome} onChangeText={setNome}/>
            <Button title="Selecionar Imagem" onPress={escolherImagem}/>
            {imagem && <Image source={{uri: imagem}} style={{width: 100, height: 100}}/>}
        </View>
    );
}
