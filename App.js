import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
    <View> 
        <Text  style={styles.Title} >Todo List</Text>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
    display:'flex',
    alignItems:"center",
    // justifyContent: 'center'  
  },
  Title:{
    fontSize:40
  }
});
