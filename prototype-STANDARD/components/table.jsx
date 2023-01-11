import React from "react";
import { View ,Text, StyleSheet ,Button} from "react-native";

function Table (){

    return(
            <View style={styles.div}>
        <View style={styles.cadre}>
            <Text style={styles.text}>Todolist</Text>
        </View>
        <View style={styles.DeleteBtn}>
            <Button title="delete" color={'red'}></Button>
        </View>
        <View style={styles.EditBtn}>
        <Button color={"green"} title="edit"></Button>
        </View>
        </View>
    )
}
export default Table;
const styles = StyleSheet.create({
    cadre: {
        flexDirection: 'column',
        justifyContent:"center",
        marginLeft:12,
        width:200,
        height:40,
        borderWidth:2,
        backgroundColor:"#CEDDDE",
        borderColor:'#007FA9',
     
    },
    text:{
        marginLeft:12,        
    },
    EditBtn:{
        marginLeft:8,        
    },
    DeleteBtn:{
        marginLeft:8,        
    },
    div:{
        margin:12,
        flexDirection:'row',
        alignItems:'center'
    },
  });