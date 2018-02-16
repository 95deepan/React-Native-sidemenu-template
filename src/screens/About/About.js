import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class About extends Component{

    render(){
        return(
            <View style={{ marginTop: 40 }}>
                <Text style={{textAlign: 'center'}}> To know more about me, view my gitHub profile, username: 95deepan </Text>
            </View>
        )
    }

}