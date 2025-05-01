import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { RadioButton, TextInput } from 'react-native-paper';

const InserirDado = (props) => {    
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const host = "http://localhost:3000"
    const [value, setValue] = useState('');

    const fetchDados = () => {
      try{
        fetch(`${host}/`).then(
          (res) => {return res.json()}
        ).then(
          (json) => {
            console.log(json)
            setCampos(json);
          }
        )
      } catch(error){
        console.error("Erro ao sincronizar para inserir dados: ", error)
      }
      
    }

    const addUser = () => {
      try{
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
          (json) => {console.log(json); fetchDados()}
        )
      } catch(error){
        console.error("Erro ao adicionar usuário para inserir dados:", error)
      }
        
      }

    return(
        <View style={{
            border: '1px solid black',
            margin: 5,
            padding: 5            
            }}>
            <TextInput
                label={"Nome"}
                mode="outlined"
                onChangeText={(text) => {setNome(text)}}
            />
            <TextInput 
                label={"Sobrenome"}
                mode="outlined"
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