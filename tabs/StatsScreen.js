import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';
import GlobalTable from '../components/stats/GlobalTable';
import CasesLine from '../components/stats/CasesLine';
import CasesPie from '../components/stats/CasesPie';
import CasesHeatMap from '../components/stats/CasesHeatMap'

export class StatsScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Header title='MyCovidTracker'/>

        <ScrollView style={styles.container}>
          <Text style={styles.headline}><Icon name='bar-chart' size={19} /> STATISTICS: {this.props.country.toUpperCase()}</Text>

          <Text style={styles.title}>Total Confirmed: Last 15 Days</Text>
          <CasesLine country={this.props.country} />

          <Text style={styles.title}>Cases Heatmap Timeline</Text>
          <CasesHeatMap country={this.props.country}/>

          <Text style={styles.title}>Total Cases Ratio</Text>
          <CasesPie country={this.props.country} /> 
          <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 5}}/>

          <Text style={styles.headline}><Icon name='globe' size={19} /> STATISTICS: GLOBAL</Text>
          <Text style={styles.title}>Global Overview</Text>
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

  headline: {
    color: 'darkslateblue',
    fontSize: 19,
    fontWeight: 'bold'
  },

  title: {
    color: 'darkslateblue',
    fontSize: 17,
    marginVertical: 8,
    fontWeight: 'bold'
  }
});

export default StatsScreen

