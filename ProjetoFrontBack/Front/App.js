import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  
  const addUser = () =>{
    fetch('http://localhost:3000/add/', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Felipe'
      }),
      Headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(
      (res) => {res.json()}
    ).then(
      (json) => {console.log(json)}
    )
  }
  
  return (
    <View style={styles.container}>
      <Button 
        title='AddUser'
        onPress={() => {addUser()}}
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
