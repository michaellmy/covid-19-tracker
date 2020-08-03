import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../Header';
import GlobalTable from '../stats/GlobalTable';
import CasesLine from '../stats/CasesLine';
import CasesPie from '../stats/CasesPie';
import CasesHeatMap from '../stats/CasesHeatMap';
import ErrorBoundary from '../ErrorBoundary';

export class StatsScreen extends Component {
  render() {
    return ( 
        <ScrollView>
          <Header />

          <ScrollView style={styles.container}>
            <ErrorBoundary reload={this.props.reload}>
              <Text style={styles.headline}><Icon name='bar-chart' size={19} /> STATISTICS: {this.props.country.toUpperCase()}</Text>

              <Text style={styles.title}><Icon name='ellipsis-v' color='darkslateblue' size={17}/>  Total Confirmed: Last 15 Days</Text>
              <CasesLine country={this.props.country} />

              <Text style={styles.title}><Icon name='ellipsis-v' color='darkslateblue' size={17}/>  Cases Timeline Heatmap</Text>
              <CasesHeatMap country={this.props.country}/>

              <Text style={styles.title}><Icon name='ellipsis-v' color='darkslateblue' size={17}/>  Total Cases Ratio</Text>
              <CasesPie country={this.props.country} /> 

              <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 10}}/>

              <Text style={styles.headline}><Icon name='globe' size={19} /> STATISTICS: GLOBAL</Text>
              <Text style={styles.title}><Icon name='ellipsis-v' color='darkslateblue' size={17}/>  Global Overview</Text>
              <GlobalTable /> 
            </ErrorBoundary>
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
    color: '#052563',
    fontSize: 19,
    fontWeight: 'bold'
  },

  title: {
    color: 'darkslateblue',
    fontSize: 17,
    marginVertical: 8,
    fontWeight: 'bold'
  }, 

  spiner: {
    marginVertical: 200
  }
});

export default StatsScreen

