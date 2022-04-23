import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Hello</Text>
      <Text style={styles.subTitle} >Sign in to your account</Text>
      <TextInput placeholder='mark_s@lumon.com' />
      <TextInput placeholder='password' />
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
  titulo:{
    fontSize: 80,
    color: '#000',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 20,
    color: 'gray'
  }
});
