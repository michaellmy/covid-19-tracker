import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';
import GlobalTable from '../components/stats/GlobalTable';
import CasesBar from '../components/stats/CasesBar';
import CasesPie from '../components/stats/CasesPie';

export class StatsScreen extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <Header title='MyCovidTracker'/>

        <ScrollView style={styles.container}>
          <Text style={styles.title}><Icon name='bar-chart' size={17}>&ensp;</Icon>{this.props.country.toUpperCase()} Total Confirmed: Last 30 Days</Text>
          
          <CasesBar country={this.props.country} />

          <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 5}}/>
          <Text style={styles.title}><Icon name='pie-chart' size={17}>&ensp;</Icon>{this.props.country.toUpperCase()} Total Cases Ratio</Text>

          <CasesPie country={this.props.country} />    

          <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 5}}/>
          <Text style={styles.title}><Icon name='globe' size={17}>&ensp;</Icon>Global Overview</Text>

          <GlobalTable /> 
          
        </ScrollView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
  },

  title: {
      color: 'darkslateblue',
      fontSize: 17,
      marginVertical: 5,
      fontWeight: 'bold'
  }
});

export default StatsScreen

