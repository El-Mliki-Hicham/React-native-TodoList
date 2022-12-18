import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './component/Task';
import Form from './component/forms';
import React from 'react';
export default class App extends React.Component {
  state= {
    task :[
        {task:"tache 1",id:1},
        {task:"tache 2",id:2}
    ],
    count:2
}

//delete function
deleteData=(id)=>{

 const data = this.state.task
 let findId = data.findIndex(value=>value.id == id) 
 data.splice(findId,1)
 this.setState({
  task:data
 })

}



// add function 
AddData=(value)=>{
value.id = this.state.count +1
this.setState({
  count:value.id
})

const Data=this.state.task
Data.push(value)
this.setState({
  task:Data
})
}

render(){
  // console.log(this.state)
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
    <Form addData={this.AddData} />
    <Task  deleteData={this.deleteData} data={this.state.task}/>
    </View>
  );
}
}