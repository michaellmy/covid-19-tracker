import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import LiveCases from '../components/LiveCases';
import Header from '../components/Header';
import CountrySelector from '../components/CountrySelector'; 
import Snackbar from 'react-native-snackbar';

export class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
          country: 'malaysia',
        }
    }

    componentDidMount () {
      this.setState({country: 'malaysia'})
    }

    changeCountry = (value) => {
        var oldCountry = this.state.country;
        this.setState({ 
          country: value
        })
        Snackbar.show({
          text: 'Country Changed!',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'steelblue',
          textColor: 'azure',
          action: {
            text: 'UNDO',
            textColor: 'azure',
            onPress: () => { this.changeCountry(oldCountry) },
          }
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Header title='MyCovidTracker'/>

                <CountrySelector changeCountry={this.changeCountry} country={this.state.country} />
                
                <LiveCases country={this.state.country}/>
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
