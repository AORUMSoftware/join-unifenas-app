import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
 
let api = { today: "2018-09-18", data: [

  { day: "2018-09-17", content: [ { value: "Yeeey0!" }, { value: "Outro yeeey!" } ] },
  { day: "2018-09-18", content: [ { value: "Hoje é Nois!" } ]  },
  { day: "2018-09-19", content: [ { value: "Yeeey2!" } ]  },
  { day: "2018-09-20", content: [ { value: "Yeeey3!" } ]  },
  { day: "2018-09-21", content: [ { value: "Pizzaa!" } ]  },

] }

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

          this.state.items[item.day].push({
            
            name: event.value,
            // height: Math.max(50, Math.floor(Math.random() * 150))

          });
  
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
    return (
      <TouchableOpacity>
        <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
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