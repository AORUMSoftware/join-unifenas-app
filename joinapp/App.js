import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import FallingDrawer from 'react-native-falling-drawer'
import FAIcon from 'react-native-vector-icons/FontAwesome5'

// 
import AboutScreen from './components/screens/AboutScreen'
import AgendaScreen from './components/screens/AgendaScreen'
import HelpScreen from './components/screens/HelpScreen'
import ThemeScreen from './components/screens/ThemeScreen'

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
  getScreen("calendar", "Calendário", "#0E2830", "#fff", "#fff", "calendar-alt", () => <AgendaScreen />),
  getScreen("help", "Ajuda", "#024153", "#fff", "#fff", "question-circle", () => <HelpScreen/>),
  getScreen("theme", "Tema", "#046F8D", "#fff", "#fff", "book", () => <ThemeScreen/>),
  getScreen("about", "Sobre", "#68BBD2", "#fff", "#fff", "lightbulb", () => <AboutScreen/>),
]

// 
export default class App extends Component {
  
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" /> 
        <FallingDrawer screens={SCREENS}/> 
      </View>
    );
  }
}
