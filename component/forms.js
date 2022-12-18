import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { logger } from "react-native-logs";
class Form extends React.Component{
    state={
        task:'',
        id:" "
    }
    handleChange=(text)=>{
        // const log = logger.createLogger();
      
        this.setState({
            task:text
        });
    }
    handleSubmit=()=>{
       this.props.addData(this.state)
       this.setState({
        task:" "
    })
    }
    
    render(){
        const styles = StyleSheet.create({
            input: {
              width: 200,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            },
            button:{
                width:100
               
            }
            ,form:{
                 alignItems:"center"
            }
          
          });
          
        return(
            <View style={styles.form}>

            <Text>Add tasks</Text>
            
             <TextInput  onChangeText={(text)=>this.handleChange(text)} value={this.state.task} style={styles.input}></TextInput>
             <View style={styles.button}>
             <Button 
              color="blue"
              title="Add"
              width="100px"
              onPress={this.handleSubmit}
             />
             </View>
            </View>
        )
    }
}
export default Form