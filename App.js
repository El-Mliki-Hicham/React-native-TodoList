import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './component/Task';
import Form from './component/forms';
import React from 'react';
export default class App extends React.Component {
  state= {
    task :[
        {task:"tach1",id:1},
        {task:"tach2",id:2}
    ]
}
render(){
  
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

  return (
    <View style={styles.container}>
      
    <View> 
        <Text  style={styles.Title} >Todo List</Text>
    </View>
    <Form/>
    <Task data={this.state.task}/>
    </View>
  );
}
}