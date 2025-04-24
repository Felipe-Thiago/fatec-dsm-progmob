import React, { useState } from "react";
import { View, Pressable, Text, TextInput } from 'react-native';

const EditarDado = (props) => {
    const [nome, setNome] = useState("");

    const Atualizar = async (id) => {
        await fetch(`http://10.68.153.215:3000/update/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            name: nome,
          }),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        })
        .then((res) => res.json())
        .then((json) => console.log(json))
    } 

    return(
        <View style={{
                    border: '1px solid black', 
                    margin: 5,
                    padding: 5
                    }}>
                    <Pressable onPress={() => {Atualizar(props.id)}}>
                        <Text>Editar</Text>
                    </Pressable>
                    <TextInput 
                        onChangeText={(text) => {setNome(text)}}
                    />
                </View>
    )
}

export default EditarDado;