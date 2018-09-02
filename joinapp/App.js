import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import FallingDrawer from 'react-native-falling-drawer'
import FAIcon from 'react-native-vector-icons/FontAwesome5'

// 
import AboutScreen from './components/screens/AboutScreen'
import AgendaScreen from './components/screens/AgendaScreen'
import SponsorScreen from './components/screens/SponsorScreen'
import ThemeScreen from './components/screens/ThemeScreen'
import SpeakerScreen from './components/screens/SpeakerScreen'

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
        <Text vcenter hcenter style={{color: titleColor, fontSize: 14}}>
          <FAIcon name={iconName} size={18} color={titleColor} /> {name}
        </Text>
      </View>
    )
  }
)

// 
const SCREENS = [
  getScreen("calendar", "Calendário", "#08314E", "#fff", "#fff", "calendar-alt", () => <AgendaScreen />),
  getScreen("sponsor", "Patrocinadores", "#063E65", "#fff", "#fff", "user-tie", () => <SponsorScreen/>),
  getScreen("speaker", "Conteúdo", "#065C98", "#fff", "#fff", "book-reader", () => <SpeakerScreen/>),
  getScreen("theme", "Tema", "#0A72BB", "#fff", "#fff", "book", () => <ThemeScreen/>),
  getScreen("about", "Sobre", "#0E9BFF", "#fff", "#fff", "lightbulb", () => <AboutScreen/>),
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
