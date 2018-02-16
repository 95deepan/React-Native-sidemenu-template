import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.OnNavigate);
    }

    OnNavigate = (event) =>{
        if(event.type === "NavBarButtonPress" ){
            if(event.id === "ToggleMe" ){
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
    }

    ManualDrawer = () =>{
        this.props.navigator.toggleDrawer({
            side: 'left'
        })
    }

    render(){
        return(
            <View style={{ margin: 30 }}>
                <Button onPress={()=> this.ManualDrawer()} title={'Toggle SideMenu'} />
            </View>
        )
    }

}