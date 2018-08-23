import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import FallingDrawer from 'react-native-falling-drawer'
import FAIcon from 'react-native-vector-icons/FontAwesome5'

// 
import About from './components/screens/About'
import AgendaScreen from './components/screens/AgendaScreen'
import Help from './components/screens/Help'
import History from './components/screens/History'

//
import SplashScreen from 'react-native-splash-screen'


// 
const styles = StyleSheet.create({ });

//
const getScreen = (key, name, color, titleColor, hamburgerColor, iconName, component) => 
(
  {
    key,
    name,
    color,
    titleColor,
    hamburgerColor,
    render: () => (<View style={{ flex: 1 }}>
                    <View style={{height:50}}></View>
                    {component()}
                  </View>),
    customHeader: () => (
      <View row vcenter hcenter mdpt style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
        <Text vcenter hcenter style={{color: titleColor, fontSize: 18}}>
          <FAIcon name={iconName} size={20} color={titleColor} /> {name}
        </Text>
      </View>
    )
  }
)

// 
const SCREENS = [
  getScreen("help", "Ajuda", "#345979", "#fff", "#fff", "question-circle", () => <Help/>),
  getScreen("history", "História", "#695876", "#fff", "#fff", "history", () => <History/>),
  getScreen("about", "Sobre", "#BA697F", "#fff", "#fff", "mobile-alt", () => <About/>),
  getScreen("calendar", "Calendário", "#EE6D7C", "#fff", "#fff", "calendar-alt", () => <AgendaScreen style={{top:50}} />),
]

// 
export default class App extends Component {
  
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View>
        <StatusBar 
          // backgroundColor="#ffffff"
          barStyle="light-content"
        />
        <FallingDrawer screens={SCREENS}/>
      </View>
    );
  }
}
