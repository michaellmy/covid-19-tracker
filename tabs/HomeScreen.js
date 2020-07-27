import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LiveCases from '../components/home/AllOverview';
import Header from '../components/Header';
import CountrySelector from '../components/CountrySelector'; 


export class HomeScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header title='MyCovidTracker'/>

                <View style={styles.inner}>
                    <Text style={styles.title}><Icon name='flag' size={17}>&nbsp;</Icon>{"SELECT COUNTRY "}</Text>

                    <CountrySelector changeCountry={this.props.changeCountry} country={this.props.country} />

                    <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 10}}/>

                    <LiveCases country={this.props.country}/>
                </View>

            </ScrollView> 
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  
  inner: {
    marginHorizontal: 15,
    marginVertical: 8,
  },

  title: {
    color: 'darkslateblue',
    fontSize: 17,
    marginVertical: 5,
    fontWeight: 'bold'
    }
});

export default HomeScreen
