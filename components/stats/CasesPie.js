import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { PieChart} from "react-native-chart-kit";

export class CasesPie extends Component {
    constructor(props){
        super(props);
        this.CASE_NUMBERS = 15;
        this.state = {
            data: [],
            isLoading: true
        }
    }

    componentDidMount () {
        this._isMounted = true;
        fetch(`https://api.covid19api.com/total/country/${this.props.country}`)
            .then ((res) => res.json() )
            .then ((resJSON) => {
                data[0].population = resJSON[resJSON.length - 1]["Confirmed"] - resJSON[resJSON.length - 1]["Recovered"] - resJSON[resJSON.length - 1]["Deaths"]
                data[1].population = resJSON[resJSON.length - 1]["Recovered"]
                data[2].population = resJSON[resJSON.length - 1]["Deaths"]
                this.setState({data: data})
            })
            .then (res => this.setState({isLoading: false}))
            .catch((error => console.log('errorInMountingLiveCases', error)))
    }

    componentDidUpdate (pProps, pS, SS) {
        if(pProps.country !== this.props.country){
            this.componentDidMount();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

    render() {
        if (this.state.isLoading) {
            return ( <View><ActivityIndicator size="large" color="#0000ff" style={styles.spinner}/></View> )
        }
        else {
            return (
                <ScrollView style={styles.container}>
                    <PieChart
                        data={this.state.data}
                        width={Dimensions.get("window").width - 25} 
                        height={200}
                        chartConfig={chartConfig}
                        accessor="population"
                    />
                </ScrollView>
            )
        }
    }
}

var data = [
    {
      name: "Active",
      population: 0,
      color: "#336699",
      legendFontColor: "#001a33",
      legendFontSize: 14
    },
    {
      name: "Recovered",
      population: 0,
      color: "#00b386",
      legendFontColor: "#001a33",
      legendFontSize: 14
    },
    {
      name: "Deaths",
      population: 0,
      color: "#6e1703",
      legendFontColor: "#001a33",
      legendFontSize: 14
    },
];

const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ecf2f8",
    backgroundGradientTo: "#c7d9ea",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
        r: "1",
        strokeWidth: "2",
        stroke: "#253a5c"
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
    }
});

export default CasesPie
