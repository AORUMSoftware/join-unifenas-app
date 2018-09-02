import React, { Component } from 'react';
import { Linking, TouchableHighlight, View } from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import { Container, Content, Card, CardItem, Text, H3} from 'native-base';

export default class AboutScreen extends Component {

  render() {
    return (
      <Container>
        <Content>
          
          <Content style={{ margin: 15 }}>
            <H3 style={{ fontWeight: "bold" }}>Sobre os Autores</H3>
            <Text style={{ marginBottom: 15 }}>Esse aplicativo foi desenvolvido por acadêmicos do 6º período do curso de Ciência da Computação da UNIFENAS (Universidade José do Rosário Vellano), usando tecnologias como ReactNative, MongoDB, Android e Swift, afins de exemplificar seu uso e eficácia para o desenvolvimento de aplicações mobile e web de forma unificada.</Text>
            
            <H3 style={{ fontWeight: "bold" }}>Sobre a JOIN</H3>
            <Text style={{ marginBottom: 15 }}>A JOIN é um evento realizado anualmente pela coordenação e professores do curso de Computação da UNIFENAS, com objetivo de trazer palestras, workshops, exposições e debates sobre diversos assuntos da área de tecnologia. Esse ano de 2018 é realizada a 29ª edição (XXIX) do evento, e esse aplicativo serve como guia de palestras para os alunos e visitantes que participarem.</Text>
            
            <Text style={{ fontWeight: "bold" }}>Devenvolvido por:</Text>
            
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>João Regis</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>Vinícius Moreira</Text>
            </View>
          </Content>

          <Card>

            <TouchableHighlight onPress={ () => { Linking.openURL('https://pt.stackoverflow.com/users/53586/jo%C3%A3o-regis')}}>
              <CardItem>
                <FAIcon name="stack-overflow" size={18} color="#000" /> 
                <Text>  João's StackOverflow</Text>
              </CardItem>
            </TouchableHighlight>

            <TouchableHighlight onPress={ () => { Linking.openURL('https://pt.stackoverflow.com/users/124407/vinicius-moreira')}}>
              <CardItem>
                <FAIcon name="stack-overflow" size={18} color="#000" /> 
                <Text>  Vinícius's StackOverflow</Text>
              </CardItem>
            </TouchableHighlight>

            <TouchableHighlight onPress={ () => { Linking.openURL('https://github.com/joaoregis')}}>
              <CardItem>
                <FAIcon name="github" size={18} color="#000" /> 
                <Text>  João's Github</Text>
              </CardItem>
            </TouchableHighlight>

            <TouchableHighlight  onPress={ () => { Linking.openURL('https://github.com/Vinicius741')}}>
              <CardItem>
                <FAIcon name="github" size={18} color="#000" /> 
                <Text>  Vinícius' Github</Text>
              </CardItem>
            </TouchableHighlight>

            <TouchableHighlight onPress={ () => { Linking.openURL('http://www.unifenas.br/computacao.asp')}}>
              <CardItem>
                <FAIcon name="external-link-alt" size={18} color="#000" /> 
                <Text>  Unifenas Computação's Site</Text>
              </CardItem>
            </TouchableHighlight>            

            <TouchableHighlight onPress={ () => { Linking.openURL('http://unifenas.br/index.asp')}}>
              <CardItem>
                <FAIcon name="external-link-alt" size={18} color="#000" /> 
                <Text>  Unifenas' Site</Text>
              </CardItem>
            </TouchableHighlight>

          </Card>
        </Content>
        <Text style={{ margin:15, fontStyle:'italic' }}>Develop once, render everywhere!</Text>
      </Container>
    );
  }

}