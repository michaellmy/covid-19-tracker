import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { LineChart, BarChart} from "react-native-chart-kit";

export class CasesBar extends Component {
    render() {
        const data = {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    data: [20, 45, 28, 80, 99, 43],
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                }
            ],
            legend: ["Rainy Days"] // optional
        };
        const screenWidth = 300;
        return (
            <ScrollView style={styles.container}>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={380} // from react-native
                    height={350}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#ffffff",
                        backgroundGradientFrom: "#DDD6FC",
                        backgroundGradientTo: "#C4B7FE",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#eee',
      alignSelf: 'center'
    },
  });

export default CasesBar
