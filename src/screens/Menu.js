import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

var DeviceWidth = Dimensions.get('window').width;


export default class Menu extends Component{

    constructor(props){
        super(props);
    }

    openPage(screenName, titleName){
        Promise.all([
            Icon.getImageSource('md-menu',30)
        ]).then(icons=>{
            this.props.navigator.push({
                screen: screenName,  // screenName should be unique and make sure it is a registered component
                title: titleName,
                animated: true, 
                animationType: 'fade',
                navigatorButtons:{
                    icon: icons[0],
                    title: titleName
                }
            })
        })
        this.props.navigator.toggleDrawer({
            side: 'left', 
            to: 'closed' 
          });
    }


    render(){
        return(
            <View style={styles.menu}>
                <View style={styles.item}>
                  <Icon name={'md-home'} size={30} />
                  <TouchableHighlight onPress={()=> this.openPage('SideMenuTemplate.Home','Home')} >
                    <Text style={styles.itemText}>Home</Text>
                  </TouchableHighlight>
                </View>

                <View style={styles.item}>
                  <Icon name={'md-help'} size={30} />
                  <TouchableHighlight onPress={()=> this.openPage('SideMenuTemplate.About','About')} >
                    <Text style={styles.itemText}>About</Text>
                  </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menu:{
        backgroundColor: '#ffffff',
        flex: 1,
        width: DeviceWidth * 0.8
    },
    icon:{
        width: 100,
        height: 100,
        marginLeft: DeviceWidth * 0.25,
        marginTop: 20
    },
    item:{
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        marginLeft: 20,
        marginTop: 20
    },
    itemText:{
        marginTop: 3,
        marginLeft: 20,
        fontSize: 18
    }
})