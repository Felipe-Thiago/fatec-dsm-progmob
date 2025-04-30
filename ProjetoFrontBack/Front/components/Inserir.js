import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { RadioButton } from 'react-native-paper';

const InserirDado = (props) => {    
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const host = "http://localhost:3000"
    const [value, setValue] = useState('');

    const addUser = () => {
        fetch(`${host}/add/`, {
          method: 'POST',
          body: JSON.stringify({
            name: nome,
            surname: sobrenome,
            gender: value,
          }),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then(
          (res) => {res.json()}
        ).then(
          (json) => {console.log(json);}
        )
      }

    return(
        <View style={{
            border: '1px solid black',
            margin: 5,
            padding: 5            
            }}>
            <Text>Nome</Text>
            <TextInput 
                onChangeText={(text) => {setNome(text)}}
            />
            <Text>Sobrenome</Text>
            <TextInput 
              onChangeText={(text) => {setSobrenome(text)}}
            />
            <Text>Sexo</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
              <RadioButton.Item label="Masculino" value="Masculino"/>
              <RadioButton.Item label="Feminino" value="Feminino"/>
            </RadioButton.Group>
          
            <Button 
                title="Cadastrar"
                onPress={()=> {addUser()}}
            />
        </View>
    );  
}

export default InserirDado;