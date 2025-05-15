import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Banco, createTable, insertUser, selectUser } from './Conf/Bd';

export default function App() {
  
  useEffect(() => {
    async function Iniciar() {
        let bd = await Banco();
        await createTable(bd);
        //insertUser(bd, 'Beltrano', 'beltrano@email.com')
        const linhas = await selectUser(bd);
        //loop
        for(const i of linhas as { ID_US: Number, NOME_US: String, EMAIL_US: String}[]){
          console.log(i.ID_US, i.NOME_US, i.EMAIL_US);
        }
      };

      Iniciar();

  }, []
  )

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
