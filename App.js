import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Navtive Startup</Text>
      <Text style={styles.textsmall}>This is Demo by Saleem</Text>
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
    gap: 20
  },
  text: {
    fontSize: 32,
    backgroundColor: 'red',
    width:'100%',
    textAlign:'center',
    paddingTop:5,
    paddingBottom:5,
    color:'#fff',
    fontWeight:'bold'
  },
  textsmall: {
    fontSize: 24,
  },
});
