import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight, Linking } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image'

export default class SponsorScreen extends Component {

  render() {

    let height ="240"

    let margin = {
      marginBottom: 50
    }

    let title = {
      fontSize: 20,
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20
    }
    
    return (
      <ScrollView>
        
        <Text style={title}>Apoio:</Text>
        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <TouchableHighlight onPress={ () => { Linking.openURL('http://www.iterative.com.br/')}} >
            <ResponsiveImage initWidth={"350"} initHeight={"200"} source={require('./img/sponsors/1.png')} />
          </TouchableHighlight>

          <TouchableHighlight style={margin} onPress={ () => { Linking.openURL('http://www.mgnettecnologia.com/')}} >
            <ResponsiveImage initWidth={"350"} initHeight={"87"} source={require('./img/sponsors/2.png')} />
          </TouchableHighlight>

          <TouchableHighlight style={margin} onPress={ () => { Linking.openURL('http://www.gaagrosolucoes.com.br/')}} >
            <ResponsiveImage initWidth={"350"} initHeight={"77"} source={require('./img/sponsors/3.png')} />
          </TouchableHighlight>
          
          <TouchableHighlight style={margin} onPress={ () => { Linking.openURL('http://www.webnet.psi.br/')}} >
            <ResponsiveImage initWidth={"355"} initHeight={"105"} source={require('./img/sponsors/4.png')} />
          </TouchableHighlight>

          <TouchableHighlight style={margin} onPress={ () => { Linking.openURL('http://www.ip3.com.br')}} >
            <ResponsiveImage initWidth={"350"} initHeight={"240"} source={require('./img/sponsors/5.png')} />
          </TouchableHighlight>

          <TouchableHighlight style={margin} onPress={ () => { Linking.openURL('http://www.facebook.com/pages/Microsul-Informatica/31233795575033')}}>
            <ResponsiveImage initWidth={"350"} initHeight={"100"} source={require('./img/sponsors/6.png')} />
          </TouchableHighlight>
          
          <TouchableHighlight style={margin} onPress={ () => { Linking.openURL('http://www.liteservice.com.br/')}} >
            <ResponsiveImage initWidth={"350"} initHeight={"70"} source={require('./img/sponsors/7.png')} />
          </TouchableHighlight>
        
        </View>

        <Text style={title}>Realização:</Text>
        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <TouchableHighlight style={{ marginTop: 10, marginBottom: 30 }} onPress={ () => { Linking.openURL('http://www.unifenas.br/')}}>
            <ResponsiveImage initWidth={"250"} initHeight={"250"} source={require('./img/sponsors/8.jpg')} />
          </TouchableHighlight>
          
        </View>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  
});

