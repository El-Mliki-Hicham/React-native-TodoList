import React from "react";
import { StyleSheet, Text, View } from 'react-native';

class Task extends React.Component{


    render(){
        return(
            <View> 
                {/* <input type="text" /> */}
            {this.props.data.map(value=>
                <Text  >  {value.task}</Text>
                )} 
        </View>
        )
    }

}
export default Task