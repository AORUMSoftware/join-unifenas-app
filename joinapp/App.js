/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AgendaScreen from './components/AgendaScreen'

import FallingDrawer from 'react-native-falling-drawer'
import MAIcon from 'react-native-vector-icons/MaterialIcons'



const renderScreen = (text) => <View vcenter hcenter><Text>{text}</Text></View>

const getScreen = (key, name, color, titleColor, hamburgerColor, iconName) => ({
  key,
  name,
  color,
  titleColor,
  hamburgerColor,
  render: () => renderScreen(name),
  customHeader: () => (
    <View row vcenter hcenter mdpt>
      <MAIcon name={iconName} size={30} color={titleColor} />
      <View mdpl />
      <Text style={{ color: titleColor, fontSize: 18 }}>{name}</Text>
    </View>
  )
})

const SCREENS = [
  getScreen("help", "Help", "#345979", "#fff", "#fff", "help"),
  getScreen("settings", "Settings", "#695876", "#fff", "#fff", "settings"),
  getScreen("history", "History", "#BA697F", "#fff", "#fff", "history"),
  getScreen("map", "Map", "#EE6D7C", "#fff", "#fff", "map"),
  getScreen("profile", "Profile", "#F7AE90", "#fff", "#fff", "person"),
]



export default class App extends Component {
  
  render() {
    return (
      <View>
        <FallingDrawer screens={SCREENS}/>
      </View>
      // <AgendaScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
