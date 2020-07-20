import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { ContributionGraph } from "react-native-chart-kit";
import Slider from '@react-native-community/slider';

export class CasesHeatMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            endDate: new Date(),
            dateIndex: 110,
            isLoading: true
        }
    }

    componentDidMount () {
        fetch(`https://api.covid19api.com/total/country/${this.props.country}`)
            .then ((res) => res.json() )
            .then ((resJSON) => {
                var data = [];

                resJSON.forEach((element, index) => {
                    index == 0 ? 

                    data.push({ date: element["Date"], count: element["Confirmed"] }) 

                    : 

                    data.push({ date: resJSON[index]["Date"], count: resJSON[index]["Confirmed"] - resJSON[index - 1]["Confirmed"]})
                });

                this.setState({data: data})
                this.setState({dateIndex: data.length})
            })
            .then (res => this.setState({isLoading: false}))
            .catch((error => console.log('errorInMountingHeatMap', error)))
    }

    componentDidUpdate (pProps, pS, SS) {
        if(pProps.country !== this.props.country){
            this.componentDidMount();
        }
    }

    updateDateIndex = (value) => {
        var d = new Date();
        this.setState({dateIndex: value})
        d.setDate(d.getDate()- (this.state.data.length - value));
        this.setState({endDate: d})
    }

    render() {
        if (this.state.isLoading) {
            return ( <View><ActivityIndicator size="large" color="#0000ff" /></View> )
        }
        else {
            return (
                <View style={styles.container}>
                    <Slider
                        style={{width: 380, height: 30, alignSelf: 'center'}}
                        minimumValue={110}
                        maximumValue={this.state.data.length - 1}
                        value={this.state.dateIndex}
                        onValueChange={value => this.updateDateIndex(value)}
                        step={1}
                    />

                   <ContributionGraph
                    values={this.state.data}
                    endDate={this.state.endDate}
                    squareSize={20}
                    numDays={110}
                    width={420}
                    height={230}
                    chartConfig={chartConfig}
                    />
                </View>
            )
        }
    }
}

const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ecf2f8",
    backgroundGradientTo: "#c7d9ea",
    color: (opacity = 0) => `rgba(0, 51, 102, ${opacity})`,
    labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#eee',
      alignSelf: 'center'
    },
  });

export default CasesHeatMap;
