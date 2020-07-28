import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AllOverview from '../home/AllOverview';
import Header from '../Header';
import CountrySelector from '../CountrySelector'; 


export class HomeScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header />

                <View style={styles.inner}>
                    <Text style={styles.title}><Icon name='flag' size={17}></Icon>  {"SELECT COUNTRY "}</Text>

                    <CountrySelector changeCountry={this.props.changeCountry} country={this.props.country} />

                    <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 10}}/>

                    <AllOverview country={this.props.country}/>
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
