import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { LineChart} from "react-native-chart-kit";

export class CasesBar extends Component {
    constructor(props){
        super(props);
        this.CASE_NUMBERS = 15;
        this.state = {
            data: {},
            isLoading: true
        }
    }

    componentDidMount () {
        fetch(`https://api.covid19api.com/total/country/${this.props.country}`)
            .then ((res) => res.json() )
            .then ((resJSON) => {
                var newData = {
                    labels: [], 
                    datasets: [
                        {
                            data: []
                        }
                    ]
                }
                resJSON.forEach((records) => {
                    newData.labels.push(records["Date"].slice(8, 10))
                    newData.datasets[0].data.push(records["Confirmed"])
                })
                newData.labels = newData.labels.slice(Math.max(newData.labels.length - this.CASE_NUMBERS, 1))
                newData.datasets[0].data = newData.datasets[0].data.slice(Math.max(newData.datasets[0].data.length - this.CASE_NUMBERS, 1))
                this.setState({data: newData})
            })
            .then (res => this.setState({isLoading: false}))
            .catch((error => console.log('errorInMountingLiveCases', error)))
    }

    componentDidUpdate (pProps, pS, SS) {
        if(pProps.country !== this.props.country){
            this.componentDidMount();
        }
    }

    render() {
        if (this.state.isLoading) {
            return (<View><ActivityIndicator size="large" color="#0000ff" style={styles.spinner}/></View>)
        }
        else {
            return (
                <ScrollView style={styles.container}>
                    <LineChart
                        data={this.state.data}
                        width={Dimensions.get("window").width - 25}
                        height={300}
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={chartConfig}
                        bezier
                        style={styles.chartStyle}
                    />
                    
                </ScrollView>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        alignSelf: 'center'
    },
    spinner: {
        flex: 1,
        marginVertical:30,
        justifyContent: 'center',
        alignItems:'center'    
    },
    chartStyle: {
        borderRadius: 5,
    }
});

const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ecf2f8",
    backgroundGradientTo: "#c7d9ea",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
        r: "1",
        strokeWidth: "2",
        stroke: "#253a5c"
    }
}

export default CasesBar;
