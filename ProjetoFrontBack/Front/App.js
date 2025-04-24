import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import ExibirDado from './components/Exibir';
import InserirDado from './components/Inserir';
import { RadioButton } from 'react-native-paper';

export default function App() {
  // Será utilizada para armazenar os dados do banco de dados
  const [campos, setCampos] = useState([]);
  const host = "http://10.68.153.215:3000"
  
  // Renderizar - Dois parâmetros, a conexão (arrow func) e o tratamento
  const fetchDados = () => {
    fetch(`${host}/`).then(
      (res) => {return res.json()}
    ).then(
      (json) => {
        console.log(json)
        setCampos(json);
      }
    )
  }
  
  useEffect(() => {
    fetchDados();
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
      (json) => {console.log(json); fetchDados();}
    )
  }
  
  
  const Exibir = () => {
    fetch(`${host}/`).then(
      (res) => {return res.json()} //quando tem chaves precisa de return
    ).then(
      (json) => {console.log(json); fetchDados();}
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
    .then((json) => {console.log(json); fetchDados();})
  } 

  //delete
  const Deletar = (id) => {
    fetch(`${host}/delete/${id}`, {
      method: 'DELETE',
    }).then((res)=> res.json())
    .then((json) => {console.log(json); fetchDados();})
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
        onPress={() => {Atualizar0("68098a2fce490dc872aac2b1")}}
      />
      
      <Button 
        title='Deletar'
        onPress={() => {Deletar("68098a2fce490dc872aac2b1")}}
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
