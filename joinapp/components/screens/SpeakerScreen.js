import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image'

export default class SpeakerScreen extends Component {

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
        
        {/* <Text style={title}>Conteúdo:</Text> */}
        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <ResponsiveImage initWidth={"350"} initHeight={"489"} source={require('./img/flyers/1.png')} />
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <ResponsiveImage initWidth={"350"} initHeight={"489"} source={require('./img/flyers/2.png')} />
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <ResponsiveImage initWidth={"350"} initHeight={"489"} source={require('./img/flyers/3.png')} />
          </View>

        </View>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  
});

