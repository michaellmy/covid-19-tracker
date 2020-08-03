import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';

import DailyOverview from './DailyOverview';
import TotalOverview from './TotalOverview';

export class LiveCases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            records: [],
            dateIndex: 0,
        }
    }

    componentDidMount () {
        fetch(`https://api.covid19api.com/total/country/${this.props.country}`)
            .then ((res) => res.json() )
            .then ((resJSON) => {
                this.setState({
                    records: resJSON,
                    dateIndex: resJSON.length - 1
                })
            })
            .then (res => this.setState({isLoading: false}))
            .catch((error) => {
                console.log('errorInMountingAllOverview', error)
                this.setState({isLoading: true})
            })
    }

    componentDidUpdate (pProps, pS, SS) {
        if(pProps.country !== this.props.country){
            this.componentDidMount();
        }
    }

    updateDateIndex = (value) => {
        this.setState ({dateIndex: value})
    }

    render() {
            if(this.state.isLoading) {
                return (<View><ActivityIndicator size="large" color="#0000ff" style={styles.spinner}/></View>)
            }

            else {
                return (
                    <View>
                        <Text style={styles.title}><Icon name='calendar' size={17}></Icon>  DATE TIMELINE: {this.state.records[this.state.dateIndex]["Date"].toString().split("T")[0]}</Text>
                        
                        <Slider
                            style={{height: 35}}
                            minimumValue={0}
                            maximumValue={this.state.records.length - 1}
                            value={this.state.dateIndex}
                            onValueChange={value => this.updateDateIndex(value)}
                            step={1}
                        />

                        <Text style={styles.title}><Icon name='ellipsis-v' color='darkslateblue' size={17}/>  DAILY OVERVIEW </Text>

                        <DailyOverview records={this.state.records} dateIndex={this.state.dateIndex}></DailyOverview>

                        <Text style={styles.title}><Icon name='ellipsis-v' color='darkslateblue' size={17}/>  {this.props.country.toString().toUpperCase()}'S TOTAL OVERVIEW</Text>

                        <TotalOverview records={this.state.records} dateIndex={this.state.dateIndex}></TotalOverview>
                    </View>
                )
            } 
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'darkslateblue',
        fontSize: 17,
        marginVertical: 5,
        fontWeight: 'bold'
    },
    spinner: {
        flex: 1,
        marginVertical: 150,
        justifyContent: 'center',
        alignItems:'center'    
    }
});

export default LiveCases;
