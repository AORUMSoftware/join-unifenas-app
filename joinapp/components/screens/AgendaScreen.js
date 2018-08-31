import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, NetInfo, ToastAndroid, Platform, AsyncStorage } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import FAIcon from 'react-native-vector-icons/FontAwesome5'

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Mai.','Jun.','Jul.','Ago','Sep.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.']
};

LocaleConfig.defaultLocale = 'br';
 
export default class AgendaScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: {},
      api: { today: "2018-09-17", data: [] },
    }

  }

  _retrieveData = async () => {
    try {

      let data = (await AsyncStorage.getItem("@JoinStore:agenda_items"))

      return data;

    }
    catch (error) {
      console.error(error)
    }
  }

  _storeData = async (data) => {
    try {
      await AsyncStorage.setItem('@JoinStore:agenda_items', data)
    } 
    catch (error) {
      console.error(error)
    }
  }

  componentWillMount() {
    
    this._retrieveData().then((result) => { 

      if (result)
        this.setState({ api: JSON.parse(result) }) 

      else 
        this.setState({ api: { today: "2018-09-17", data: [] } }) 

        NetInfo.getConnectionInfo()
        .then((connectionInfo) => {
    
          if (connectionInfo.type != "none" && connectionInfo.type != "unknown") {
    
            fetch("http://api.join2018.xyz:9090/events/agenda")
              .then((res) => res.json())
              .then((resJson) => { 
    
                this.setState({ api: resJson }) 
                this._storeData(JSON.stringify(resJson))
    
              })
              .catch((error) => {
    
                console.error(error);
    
              })
    
            }
            else {
              
              if (Platform.OS === 'android')
                ToastAndroid.show('Não foi possível conectar-se à internet para obter os dados atualizados do evento.', ToastAndroid.LONG);
            }
    
        })
    
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
        hideKnob={true}
        theme={{
          agendaTodayColor: '#0E2830',
          agendaKnobColor: '#0E2830',
          dotColor: '#0E2830',
          selectedDayBackgroundColor: '#0E2830', 
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
          
          event.isEvent = true
          this.state.items[item.day].push(event);
  
        })
        
      })

      var emptyObject = {
        isEvent: false
      }

      this.state.items["2018-09-16"] = []
      this.state.items["2018-09-16"].push(emptyObject)
      
      this.state.items["2018-09-21"] = []
      this.state.items["2018-09-21"].push(emptyObject)
      
      this.state.items["2018-09-22"] = []
      this.state.items["2018-09-22"].push(emptyObject)
  
      const newItems = { }
      Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key] });
      this.setState({ items: newItems });

    }, 2000);

  }

  renderItem(item) {

    if (item.isEvent) {

      const ministerDescription = <Text>{item.ministerDescription}</Text>
      const where = <Text><Text style={{ fontWeight: "bold" }}>Local: </Text>{item.where}</Text>
      const minister = <Text><Text style={{ fontWeight: "bold" }}>{item.qualification}: </Text>{item.minister}</Text>

      return (
        <TouchableOpacity style={{ marginBottom: 10 }}>

          <View style={[styles.item, {height: item.height}]}>
            
            <Text><Text style={{ fontWeight: "bold" }}>{item.schedule} {item.label}</Text> {item.title}</Text>
            
            { item.minister === "" ? <View></View> : minister }

            { item.ministerDescription === "" ? <View></View> : ministerDescription }

            { item.where === "" ? <View></View> : where }

          </View>

        </TouchableOpacity>
      )

    }
    else {

      return (
        <TouchableOpacity style={{ marginBottom: 10 }}>

          <View style={[
            styles.item, 
            {height: item.height}, 
            {alignItems: 'center'}]}>
            
            <FAIcon name="meh-blank" size={80} color="#f0f0f0" />
            <Text>Nenhum evento neste dia</Text>

          </View>

        </TouchableOpacity>)

    }

  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>Nenhum evento neste dia.</Text></View>
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