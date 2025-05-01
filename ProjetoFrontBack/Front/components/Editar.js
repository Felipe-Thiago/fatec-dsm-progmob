import React, { useState } from "react";
import { View, Button } from 'react-native';
import { RadioButton, List, TextInput } from "react-native-paper";

const EditarDado = (props) => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [sexo, setSexo] = useState("");

    const Atualizar = async (id) => {
      try{
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
      } catch(error){
        console.error("Erro ao editar: ", error)
      }
        
    } 

    return(
        <View style={{
                    border: '1px solid black', 
                    margin: 5,
                    padding: 5
                    }}>
                      <List.Accordion title="Editar">
                        <TextInput label="Nome" mode="outlined" onChangeText={(text) => {setNome(text)}} />
                        <TextInput label="Sobrenome" mode="outlined" onChangeText={(text) => {setSobrenome(text)}}/>
                        <List.Item title="Sexo:"/>
                        <RadioButton.Group onValueChange={newValue => setSexo(newValue)} value={sexo}>
                          <RadioButton.Item label="Masculino" value="Masculino"/>
                          <RadioButton.Item label="Feminino" value="Feminino"/>
                        </RadioButton.Group>

                        <Button title="Editar" onPress={() => {Atualizar(props.id)}} />
                      </List.Accordion>
                    
                </View>
    )
}

export default EditarDado;