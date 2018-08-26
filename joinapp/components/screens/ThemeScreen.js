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
          <Text style={[s.subtitle, s.paragraph]}>A JOIN 2018 terá como tema as "Tecologias Disruptivas", veja o que o termo significa.</Text>
          
          <View style={{ flexGrow: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
          
            <ResponsiveImage initWidth="338" initHeight="439" source={require('./img/disruptive.jpg')} />
          
          </View>

          <Text style={[s.margin, s.paragraph]}>          A inovação disruptiva define a transformação de um produto, mercado ou setor existente por meio da simplicidade, conveniência e acessibilidade. Ocorre quando um nicho se apresenta defasado e é surpreendido pelo novo, capaz de oferecer novas práticas e conceitos dentro de um segmento. A Computação é a área em que a inovação disruptiva está mais presente ao longo da História. Dos grandes mainframes de alto custo aos smartphones conectados e suas fantásticas aplicações, a Ciência da Computação é parte indissociável da evolução da Humanidade. A XXIX JOIN traz, em sua concepção, o objetivo de apresentar aos seus participantes como as tecnologias disruptivas têm revolucionado a indústria e o mercado, trazendo novas perspectivas de criação na pesquisa e no trabalho. Sejam bem-vindos ao caminho da inovação!</Text>

      </ScrollView>
    );
  }

  
}

