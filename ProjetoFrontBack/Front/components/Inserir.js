import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const InserirDado = (props) => {    
    const [nome, setNome] = useState("");

    const addUser = () => {
        fetch(`http://10.68.153.215:3000/add/`, {
          method: 'POST',
          body: JSON.stringify({
            name: nome
          }),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then(
          (res) => {res.json()}
        ).then(
          (json) => {console.log(json)}
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
            <Button 
                title="Cadastrar"
                onPress={()=> {addUser()}}
            />
        </View>
    );  
}

export default InserirDado;