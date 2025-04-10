import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  
  const addUser = () => {
    fetch('http://10.68.153.91:3000/add/', {
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
    fetch('http://10.68.153.91:3000/').then(
      (res) => {return res.json()} //quando tem chaves precisa de return
    ).then(
      (json) => {console.log(json)}
    )
  }

  const Atualizar0 = (id) => {
    fetch(`http://10.68.153.91:3000/update/${id}`, {
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
    fetch(`http://10.68.153.91:3000/delete/${id}`, {
      method: 'DELETE',
    }).then((res)=> res.json())
    .then((json) => console.log(json))
  }

  return (
    <View style={styles.container}>
      <Button 
        title='Exibir'
        onPress={() => {Exibir()}}
      />

      <Button 
        title='Atualizar'
        onPress={() => {Atualizar0("67f70e06b81eb5eca76190c9")}}
      />
      
      <Button 
        title='Deletar'
        onPress={() => {Deletar("67f70e06b81eb5eca76190c9")}}
      />
      
      <StatusBar style="auto" />
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
