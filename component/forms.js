import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { logger } from "react-native-logs";
class Form extends React.Component{
    state={
        value:''
    }
    handleChange=(text)=>{
        const log = logger.createLogger();
        // log.info()
        this.setState({
            value:text
        });
        
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
            
             <TextInput  onChangeText={(text)=>this.handleChange(text)} style={styles.input}></TextInput>
             <View style={styles.button}>
             <Button 
              color="red"
              title="Add"
              width="100px"
             />
             </View>
             <Text>{this.state.value} </Text>
            </View>
        )
    }
}
export default Form