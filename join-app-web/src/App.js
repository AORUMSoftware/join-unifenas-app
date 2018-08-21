import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import FallingDrawer from 'react-native-falling-drawer'

const styles = StyleSheet.create({ });


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
  getScreen("map", "Map", "#F7AE90", "#fff", "#fff", "user-alt", () => <Text>Map</Text>),
  getScreen("help", "Ajuda", "#345979", "#fff", "#fff", "question-circle", () => <Text>Help</Text>),
  getScreen("settings", "Settings", "#695876", "#fff", "#fff", "wrench", () => <Text>Settings</Text>),
  getScreen("history", "History", "#BA697F", "#fff", "#fff", "history", () => <Text>History</Text>),
  getScreen("calendar", "Calendário", "#EE6D7C", "#fff", "#fff", "calendar-alt", () => <Text>Calendario</Text>),
]


export default class App extends React.Component {
  render() {
    return (
      
        <FallingDrawer screens={SCREENS}/>
      
      
    );
  }
}

