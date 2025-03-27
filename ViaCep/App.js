import { Text, View, ScrollView, StatusBar, StatusBarStyle } from 'react-native';
import { styles } from './assets/styles';
import { useState } from 'react';
import { Button, TextInput, List, Modal, Portal, PaperProvider } from 'react-native-paper'

// Caso haja erros com o powershell -> pesquisar Get-ExecutionPolicy

export default function App() {
  //ReactHook
  const [cep, setCep] = useState('');
  let [dados, setDados] = useState([]);

  const [expanded, setExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  //função para mudar o estado
  const handleAccordionPress = () => setExpanded(!expanded);
  //pegar o valor do select e mostrar na tela
  const handleItemPress = (x) => {
    setSelectedValue(x);
    setExpanded(false);
  }

  //Modal do erro
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};


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
        setSelectedValue(dados.uf);
      }
    ).catch(
      (erro) => {showModal(erro)}
    )
  }

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Erro nas informações do CEP, insira um CEP válido</Text>
          <Button mode="contained-tonal" onPress={hideModal} style={{marginTop: 30}}>OK</Button>
        </Modal>
      </Portal>

      <ScrollView>
        <View style={styles.container}>
          <View style={{marginBottom: 30}}>
            <TextInput 
              placeholder="Nome"
              mode='outlined'
            />
            <TextInput 
              placeholder="Sobrenome"
              mode='outlined'
            />
            <TextInput 
              placeholder="Email"
              mode='outlined'
            />
          </View>
          
          
          <TextInput 
            placeholder="Digite o CEP"
            onChangeText={(value) => {setCep(value)}}
            mode='outlined'
            keyboardType='Numeric'
            maxLength={9}
            onBlur={() => buscaCep(cep)}
          />
        
          {/* <Text style={styles.text}>{dados.logradouro}</Text>
          <Text style={styles.text}>Bairro: {dados['bairro']}</Text>
          <Text style={styles.text}>Cidade: {dados.localidade}</Text>
          <Text style={styles.text}>Estado: {dados.uf}</Text> */}

          <TextInput 
            label="Rua"
            mode="outlined"
            value={dados.logradouro||null}
            onChangeText={(value) => { setDados(dados.logradouro = value)}}
          />
          <TextInput 
            label="Número"
            mode="outlined"
          />
          <TextInput 
            label="Complemento"
            mode="outlined"
            value={dados.complemento||null}
            onChangeText={(value) => { setDados(dados.complemento = value)}}
          />
          <TextInput 
            label="Bairro"
            mode="outlined"
            value={dados.bairro||null}
            onChangeText={(value) => { setDados(dados.bairro = value)}}
          />
          
          <TextInput 
            label="Cidade"
            mode="outlined"
            value={dados.localidade||null}
            onChangeText={(value) => { setDados(dados.localidade = value)}}
          />

          <List.Section title="Estado">
            <List.Accordion title={selectedValue == null ? 'Selecione o Estado' : selectedValue}
             expanded={expanded}
             onPress={handleAccordionPress}
             onChangeText={(value) => {setDados(dados.uf = value)}}
            >
            <List.Item title="AC" onPress={()=>{handleItemPress("AC")}}/>
            <List.Item title="AL" onPress={()=>{handleItemPress("AL")}}/>
            <List.Item title="AM" onPress={()=>{handleItemPress("AM")}}/>
            <List.Item title="AP" onPress={()=>{handleItemPress("AP")}}/>
            <List.Item title="BA" onPress={()=>{handleItemPress("BA")}}/>
            <List.Item title="CE" onPress={()=>{handleItemPress("CE")}}/>
            <List.Item title="ES" onPress={()=>{handleItemPress("ES")}}/>
            <List.Item title="GO" onPress={()=>{handleItemPress("GO")}}/>
            <List.Item title="MA" onPress={()=>{handleItemPress("MA")}}/>
            <List.Item title="MT" onPress={()=>{handleItemPress("MT")}}/>
            <List.Item title="MS" onPress={()=>{handleItemPress("MS")}}/>
            <List.Item title="MG" onPress={()=>{handleItemPress("MG")}}/>
            <List.Item title="PA" onPress={()=>{handleItemPress("PA")}}/>
            <List.Item title="PB" onPress={()=>{handleItemPress("PB")}}/>
            <List.Item title="PR" onPress={()=>{handleItemPress("PR")}}/>
            <List.Item title="PE" onPress={()=>{handleItemPress("PE")}}/>
            <List.Item title="PI" onPress={()=>{handleItemPress("PI")}}/>
            <List.Item title="RJ" onPress={()=>{handleItemPress("RJ")}}/>
            <List.Item title="RN" onPress={()=>{handleItemPress("RN")}}/>
            <List.Item title="RS" onPress={()=>{handleItemPress("RS")}}/>
            <List.Item title="RO" onPress={()=>{handleItemPress("RO")}}/>
            <List.Item title="RR" onPress={()=>{handleItemPress("RR")}}/>
            <List.Item title="SC" onPress={()=>{handleItemPress("SC")}}/>
            <List.Item title="SP" onPress={()=>{handleItemPress("SP")}}/>
            <List.Item title="SE" onPress={()=>{handleItemPress("SE")}}/>
            <List.Item title="TO" onPress={()=>{handleItemPress("TO")}}/>
            </List.Accordion>
          </List.Section>

          <StatusBar style="auto" />

          <Button 
          icon='file-search-outline'
          mode="contained"
          onPress={()=>{buscaCep(cep)}}
          > Buscar </Button>
        </View>
      </ScrollView>
    </PaperProvider>
    
  );
}