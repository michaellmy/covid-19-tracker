import React, { Component } from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class TotalOverview extends Component {
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        return (
            <View>
                <DataTable style={styles.table}>
                    <DataTable.Header>
                        <DataTable.Title><Text style={styles.tableHeader}><Icon name='bars' size={16}>&ensp;</Icon>Category</Text></DataTable.Title>
                        <DataTable.Title numeric><Text style={styles.tableHeader}>Total Cases</Text></DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.tableBodyConfirmed}>Total Confirmed</Text></DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.tableBodyConfirmed}>
                                { this.numberWithCommas(this.props.records[this.props.dateIndex]["Confirmed"]) }
                            </Text>
                        </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.tableBodyRecovered}>Total Recovered</Text></DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.tableBodyRecovered}>
                                { this.numberWithCommas(this.props.records[this.props.dateIndex]["Recovered"]) }
                            </Text>
                        </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.tableBodyDeaths}>Total Deaths</Text></DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.tableBodyDeaths}>
                                { this.numberWithCommas(this.props.records[this.props.dateIndex]["Deaths"]) }
                            </Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
                <Text style={{fontSize: 6}}>{"\n"}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    table: {
      backgroundColor: '#fff',
    },

    tableHeader: {
        fontWeight: 'bold',
        fontSize: 16
    },

    tableBodyConfirmed: {
        color: 'darkblue',
        fontSize: 15
    },

    tableBodyRecovered: {
        color: 'forestgreen',
        fontSize: 15
    },

    tableBodyDeaths: {
        color: 'firebrick',
        fontSize: 15
    },
});

export default TotalOverview
