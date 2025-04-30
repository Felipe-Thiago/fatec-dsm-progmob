import React, { useState } from "react";
import { View, Pressable, Text, TextInput } from 'react-native';
import { RadioButton } from "react-native-paper";

const EditarDado = (props) => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [sexo, setSexo] = useState("");

    const Atualizar = async (id) => {
        await fetch(`http://localhost:3000/update/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            name: nome,
            surname: sobrenome,
            gender: sexo
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
                    <Text>Nome:</Text>
                    <TextInput 
                        onChangeText={(text) => {setNome(text)}}
                    />
                    <Text>Sobrenome:</Text>
                    <TextInput 
                        onChangeText={(text) => {setSobrenome(text)}}
                    />
                    <Text>Sexo:</Text>
                    <RadioButton.Group onValueChange={newValue => setSexo(newValue)} value={sexo}>
                      <RadioButton.Item label="Masculino" value="Masculino"/>
                      <RadioButton.Item label="Feminino" value="Feminino"/>
                    </RadioButton.Group>
                </View>
    )
}

export default EditarDado;