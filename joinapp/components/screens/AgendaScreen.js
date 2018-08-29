import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
 
export default class AgendaScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      api: {}
    };
  }

  componentWillMount() {

    fetch("http://api.join2018.xyz:9090/events/agenda")
      .then((res) => res.json())
      .then((resJson) => this.setState({ ...this.state, api: resJson }))
      .catch((error) => 
      {
        console.error(error);
      })

  }

  addDays(date, days) {
      date.setDate(date.getDate() + days);
      return date;
  }

  render() {

    let todayByApi = this.addDays(new Date(this.state.api.today), 1)
    let minDateJoin = this.addDays(new Date("2018-09-17"), 1)
    let maxDateJoin = this.addDays(new Date("2018-09-20"), 1)
    let today = Date.now()

    if (minDateJoin < todayByApi)
      today = todayByApi
    else if (maxDateJoin < todayByApi)
      today = maxDateJoin
    else
      today = minDateJoin

    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={today}
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

      this.state.api.data.forEach((item) => {

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

    }, 2000);

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