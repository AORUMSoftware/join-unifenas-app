import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, WebView } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image'

const styles = StyleSheet.create({

  paragraph: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  margin: {
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: 'justify'
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },

  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },

  firstLetter: {
    fontSize: 23
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
  
});

export default class ThemeScreen extends Component {
  
  constructor(props) {
    super(props)
    this.props = props
    this.styles = styles
  }
  
  render() {

    let s = this.styles

    return (
      <ScrollView>
          <Text style={[s.title, s.paragraph]}>Tecnologias Disruptivas</Text>
          <Text style={[s.subtitle, s.paragraph]}>A JOIN 2018 terá como tema as "Tecologias Disruptivas", mas o que são? Quais são? Vamos descobrir!</Text>
          
          <View style={{ flexGrow: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
          
            <ResponsiveImage initWidth="338" initHeight="439" source={require('./img/disruptive.jpg')} />
          
          </View>

          <Text style={[s.margin, s.paragraph]}>          Tecnologia disruptiva ou inovação disruptiva é um termo que descreve a inovação tecnológica, produto, ou serviço, com características "disruptivas", em vez de evolutivas - ou seja, que provocam uma ruptura com os padrões, modelos ou tecnologias já estabelecidos no mercado. O termo é uma tradução literal do conceito inglês «disruptive» e significa aquilo que "interrompe o curso normal", cria uma descontinuidade, sendo portanto transformador ou revolucionário. O termo se popularizou entre os jovens empreendedores do Vale do Silício e foi apropriado pelas estratégias de marketing e publicidade. Atualmente é usado para promover produtos ou serviços considerados inovadores nos mais variados sentidos.</Text>

      </ScrollView>
    );
  }

  
}

