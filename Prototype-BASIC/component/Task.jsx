import React from "react";
import {Button, StyleSheet, Text, View } from 'react-native';

class Task extends React.Component{
handleDelete=(id)=>{
    this.props.deleteData(id)
}

    render(){
        
        const styles = StyleSheet.create({
            table :{
                marginTop:30
            },
            Row:{
                width:300,
                display:"flex",
                flexDirection: "row",
                marginTop:12,
                padding:8,
                borderWidth:2,
                alignItems:"center" ,
                justifyContent: "space-between",
            },
            textRow:{
                marginRight:12
            }
        })
    
        return(
            <View  style={styles.table}> 
         
            {this.props.data.map(value=>
            <View style={styles.Row}>
               <Text style={styles.textRow}> {value.task}</Text>
                <Button color={"red"} onPress={()=>this.handleDelete(value.id)} title="delete"></Button>
            </View>
                )} 
        </View>
        )


    }
}
export default Task