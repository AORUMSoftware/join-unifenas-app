import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
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
          
          <View>
            <ResponsiveImage initWidth={"350"} initHeight={"200"} source={require('./img/sponsors/1.png')} />
          </View>

          <View style={margin}>
            <ResponsiveImage initWidth={"350"} initHeight={"87"} source={require('./img/sponsors/2.png')} />
          </View>

          <View style={margin}>
            <ResponsiveImage initWidth={"350"} initHeight={"77"} source={require('./img/sponsors/3.png')} />
          </View>
          
          <View style={margin}>
            <ResponsiveImage initWidth={"355"} initHeight={"105"} source={require('./img/sponsors/4.png')} />
          </View>

          <View style={margin}>
            <ResponsiveImage initWidth={"350"} initHeight={"240"} source={require('./img/sponsors/5.png')} />
          </View>

          <View style={margin}>
            <ResponsiveImage initWidth={"350"} initHeight={"100"} source={require('./img/sponsors/6.png')} />
          </View>
          
          <View style={margin}>
            <ResponsiveImage initWidth={"350"} initHeight={"70"} source={require('./img/sponsors/7.png')} />
          </View>
        
        </View>

        <Text style={title}>Realização:</Text>
        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <View style={{ marginTop: 10, marginBottom: 30 }}>
            <ResponsiveImage initWidth={"250"} initHeight={"250"} source={require('./img/sponsors/8.jpg')} />
          </View>
          
        </View>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  
});

