import { Text, View, TextInput } from 'react-native';
import { styles } from './assets/styles';
import { useState } from 'react';
import { Button } from 'react-native-paper'

// Caso haja erros com o powershell -> pesquisar Get-ExecutionPolicy

export default function App() {
  //ReactHook
  const[cep, setCep] = useState('');
  let[dados, setDados] = useState([]);

  const buscaCep = (arg) => {
    let url = `https://viacep.com.br/ws/${arg}/json/`
    //console.log(url);
    fetch(url) //realiza a leitura do url
    .then(
      ( resp ) => { return resp.json()}
    ).then(
      (xjson) => {
        console.log(xjson);
        setDados(xjson);
      }
    ).catch(
      (erro) => {console.log(erro)}
    )
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Digite o CEP"
        onChangeText={(x) => {setCep(x)}}
        style={styles.textInput}
        keyboardType='Numeric'
        maxLength={9}
      />

      <Button 
        icon='card-search'
        mode="contained"
        onPress={()=>{buscaCep(cep)}}
      > Buscar </Button>
      <View>
        <Text style={styles.text}>{dados.logradouro}</Text>
        <Text style={styles.text}>Bairro: {dados['bairro']}</Text>
        <Text style={styles.text}>Cidade: {dados.localidade}</Text>
        <Text style={styles.text}>Estado: {dados.uf}</Text>
      </View>
      
    </View>
  );
}