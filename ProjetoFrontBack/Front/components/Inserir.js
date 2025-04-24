import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { RadioButton } from 'react-native-paper';

const InserirDado = (props) => {    
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [checked, setChecked] = useState('Masculino');
    const host = "http://10.68.153.215:3000"

    const addUser = () => {
        fetch(`${host}/add/`, {
          method: 'POST',
          body: JSON.stringify({
            name: nome,
            surname: sobrenome,
            gender: checked,
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
            <View>
              <RadioButton 
                value="Masculino" 
                status={checked === "Masculino" ? "checked" : "unchecked"}
                onPress={() => setChecked("Masculino")}
                label="Masculino"
              />
              <Text>Masculino</Text>
            </View>
             
            <View>
              
            </View>
            <RadioButton 
              value="Feminino" 
              status={checked === "Feminino" ? "checked" : "unchecked"}
              onPress={() => setChecked("Feminino")}
              label="Feminino"
            > <Text>Feminino</Text>
              </RadioButton>
            <Button 
                title="Cadastrar"
                onPress={()=> {addUser()}}
            />
        </View>
    );  
}

export default InserirDado;