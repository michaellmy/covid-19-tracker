import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';
import GlobalTable from '../components/stats/GlobalTable';
import CasesBar from '../components/stats/CasesBar';


export class StatsScreen extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScrollView>
        
        <Header title='MyCovidTracker'/>

        <ScrollView style={styles.container}>
          <Text style={styles.title}><Icon name='globe' size={17}>&ensp;</Icon>Global Overview</Text>

          <GlobalTable />

          <Text style={styles.title}><Icon name='globe' size={17}>&ensp;</Icon>Total Confirmed: Last 30 Days</Text>

          <CasesBar country={this.props.country} />

        </ScrollView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 15,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  title: {
      color: 'darkslateblue',
      fontSize: 17,
      marginVertical: 5,
      fontWeight: 'bold'
  }
});

export default StatsScreen

