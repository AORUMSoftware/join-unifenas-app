import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { If } from '../utils/if'
 
let api = 
{ 
  today: "2018-09-18", 
  data: [
    { 
      _id: "",
      day: "2018-09-17", 
      content: [ 
        {  
          schedule: "13h30 às 17h30",
          label: "Minicurso 1",
          title: "Desenvolvendo aplicações Web - Mobile com ReactJS",
          qualification: "Instrutores",
          minister: "Acadêmicos João Vitor Regis Falcão e Vinícius de Ávila Moreira",
          ministerDescription: "",
          where: "Laboratório de Computação - S. 2003" 
        }, 
        { 
          schedule: "13h30 às 17h",
          label: "Visitas Técnicas – Unifi e Sinterama",
          title: "",
          qualification: "Organizador",
          minister: "Prof. Erivelton Antônio dos Santos",
          ministerDescription: "",
          where: ""
        }, 
        { 
          schedule: "19h",
          label: "Palestra",
          title: "Mobile Meets BigData",
          qualification: "Palestrante",
          minister: "Jorge Silveira",
          ministerDescription: "Bacharel em Ciência da Computação – UNIFENAS, MBA - Arquitetura de Soluções e Tecnologia da Informação – FIAP, Gerente de tecnologia da informação na Hands Mobile Advertising",
          where: ""
        }, 
        { 
          schedule: "20h30",
          label: "Palestra",
          title: "Da startup ao sucesso: quando, como e por onde devo começar?",
          qualification: "Palestrante",
          minister: "Uirá Pinheiro Soares",
          ministerDescription: "Gerente da NidusTec, Graduado em Administração Pública e Economia pela Unifal-MG, MBA em Gestão de Negócios pela USP/Esalq",
          where: ""
        }, 
      ] 
    },
    
    { day: "2018-09-18", 
      content: [ 
        {  
          schedule: "",
          label: "",
          title: "",
          qualification: "",
          minister: "",
          ministerDescription: "",
          where: "" 
        },
      ] 
    },
    
    { day: "2018-09-19", 
      content: [ 
        {  
          schedule: "",
          label: "",
          title: "",
          qualification: "",
          minister: "",
          ministerDescription: "",
          where: "" 
        },
      ] 
    },

    { day: "2018-09-20", 
      content: [ 
        {  
          schedule: "21h",
          label: "Pizzada",
          title: "Encerramento da JOIN 2018",
          qualification: "",
          minister: "",
          ministerDescription: "",
          where: "Na pizzaria, uai." 
        },
      ] 
    },
  ] 
}

export default class AgendaScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={api.today}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        theme={{
          agendaTodayColor: '#0E2830',
          agendaKnobColor: '#0E2830',
          dotColor: '#0E2830',
          selectedDayBackgroundColor: '#0E2830', // 
          todayTextColor: '#046F8D',
        }}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {

      api.data.forEach((item) => {

        this.state.items[item.day] = [];

        item.content.forEach((event) => {

          this.state.items[item.day].push(event);
  
        })
        
      })

      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });

    }, 1000);

  }

  renderItem(item) {

    const ministerDescription = <Text>{item.ministerDescription}</Text>
    const where = <Text><Text style={{ fontWeight: "bold" }}>Local: </Text>{item.where}</Text>
    const minister = <Text><Text style={{ fontWeight: "bold" }}>{item.qualification}: </Text>{item.minister}</Text>

    return (
      <TouchableOpacity>

        <View style={[styles.item, {height: item.height}]}>
          
          <Text><Text style={{ fontWeight: "bold" }}>{item.schedule} {item.label}</Text> {item.title}</Text>
          
          { item.minister === "" ? <View></View> : minister }

          { item.ministerDescription === "" ? <View></View> : ministerDescription }

          { item.where === "" ? <View></View> : where }

        </View>

      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});