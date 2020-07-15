import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import LiveCases from '../components/home/AllOverview';
import Header from '../components/Header';
import CountrySelector from '../components/CountrySelector'; 


export class HomeScreen extends Component {
    constructor(props){
        super(props);
    } 

    render() {
        return (
            <ScrollView style={styles.container}>
                <Header title='MyCovidTracker'/>

                <CountrySelector title={"SELECT COUNTRY "} changeCountry={this.props.changeCountry} country={this.props.country} />
                
                <LiveCases country={this.props.country}/>
            </ScrollView> 
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default HomeScreen
