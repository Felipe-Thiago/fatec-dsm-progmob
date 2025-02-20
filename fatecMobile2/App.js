import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return ( //<-- jsx - javascript com tags
    <View style={styles.container}>
      <Image 
        source={ require("./assets/android.png") }
      />
      <Text>android aulas</Text>
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
