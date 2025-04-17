import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import ExibirDado from './components/Exibir';
import InserirDado from './components/Inserir';

export default function App() {
  // Será utilizada para armazenar os dados do banco de dados
  const [campos, setCampos] = useState([]);
  const host = "http://10.68.153.215:3000"
  
  // Renderizar - Dois parâmetros, a conexão (arrow func) e o tratamento
  useEffect(() => {
    fetch(`${host}/`).then(
      (res) => {return res.json()}
    ).then(
      (json) => {
        console.log(json)
        setCampos(json);
      }
    )
  }, []); //executa a função apenas uma vez, evita uma lista infinita de requisições

  const addUser = () => {
    fetch(`${host}/add/`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Felipe'
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
  
  const Exibir = () => {
    fetch(`${host}/`).then(
      (res) => {return res.json()} //quando tem chaves precisa de return
    ).then(
      (json) => {console.log(json)}
    )
  }

  const Atualizar0 = (id) => {
    fetch(`${host}/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: 'xx'
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then((res) => res.json())
    .then((json) => console.log(json))
  } 

  //delete
  const Deletar = (id) => {
    fetch(`${host}/delete/${id}`, {
      method: 'DELETE',
    }).then((res)=> res.json())
    .then((json) => console.log(json))
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <Button 
        title='Exibir'
        onPress={() => {Exibir()}}
      />

      <Button 
        title='AddUser'
        onPress={() => {addUser()}}
      />

      <Button 
        title='Atualizar'
        onPress={() => {Atualizar0("67f70e06b81eb5eca76190c9")}}
      />
      
      <Button 
        title='Deletar'
        onPress={() => {Deletar("67f70e06b81eb5eca76190c9")}}
      />

      <InserirDado />
      <ExibirDado campo={campos}/>
      
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
