import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Table from './components/table';

export default function App() {
  return (
    <View style={styles.body} >
    <View style={styles.ViewTitle}>
      <Text style={styles.Title}>Todolist</Text>
    
    </View>
    <View style={styles.Cadre}>
      <Table/>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor:'#B0C0D4',    
  },
  ViewTitle: {
   marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    color:'white',
    fontSize:30,    
  },
  Cadre: {
    marginTop:60,    
  },
});
