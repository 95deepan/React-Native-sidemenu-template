import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

// Pages
import Home from './src/screens/Home/Home';
import About from './src/screens/About/About'

// Side Menu screen
import Menu from './src/screens/Menu'



Navigation.registerComponent('SideMenuTemplate.Home',()=> Home );
Navigation.registerComponent('SideMenuTemplate.SideMenu',()=> Menu );
Navigation.registerComponent('SideMenuTemplate.About',()=> About );

Promise.all([
    Icon.getImageSource('md-menu',30)
]).then(icons=>{
    Navigation.startSingleScreenApp({
        screen:{
            screen: 'SideMenuTemplate.Home',
            title: 'Home',
            navigatorButtons:{
                leftButtons:[
                    {
                        title: 'Menu',
                        icon: icons[0],
                        id: 'ToggleMe'
                    }
                ]
            }
        },
        drawer:{
            left: {
                screen: 'SideMenuTemplate.SideMenu'
            }
        },
        appStyle: {
            navigationBarColor: '#a5a5a5',
            navBarBackgroundColor: '#a5a5a5',
          } 
    })
})