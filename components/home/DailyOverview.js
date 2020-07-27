import React, { Component } from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class DailyOverview extends Component {
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        return (
            <View>
                <DataTable style={styles.table}>

                    <DataTable.Header>
                        <DataTable.Title><Text style={styles.tableHeader}><Icon name='bars' size={16}>&ensp;</Icon>Category</Text></DataTable.Title>
                        <DataTable.Title numeric><Text style={styles.tableHeader}>No. of Cases</Text></DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.tableBodyConfirmed}>New Confirmed</Text></DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.tableBodyConfirmed}>
                                { this.props.dateIndex != 0 ?
                                this.numberWithCommas(this.props.records[this.props.dateIndex]["Confirmed"] - this.props.records[this.props.dateIndex - 1]["Confirmed"])
                                :
                                this.numberWithCommas(this.props.records[this.props.dateIndex]["Confirmed"])
                                }
                            </Text>
                        </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.tableBodyRecovered}>Recovered</Text></DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.tableBodyRecovered}>
                                { this.props.dateIndex != 0 ?
                                this.numberWithCommas(this.props.records[this.props.dateIndex]["Recovered"] - this.props.records[this.props.dateIndex - 1]["Recovered"])
                                :
                                this.numberWithCommas(this.props.records[this.props.dateIndex]["Recovered"])
                                }
                            </Text>
                        </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.tableBodyDeaths}>Deaths</Text></DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.tableBodyDeaths}>
                                { this.props.dateIndex != 0 ?
                                this.numberWithCommas(this.props.records[this.props.dateIndex]["Deaths"] - this.props.records[this.props.dateIndex - 1]["Deaths"])
                                :
                                this.numberWithCommas(this.props.records[this.props.dateIndex]["Deaths"])
                                }
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
        fontWeight: 'bold',
        color: 'darkblue',
        fontSize: 15
    },

    tableBodyRecovered: {
        fontWeight: 'bold',
        color: 'forestgreen',
        fontSize: 15
    },

    tableBodyDeaths: {
        fontWeight: 'bold',
        color: 'firebrick',
        fontSize: 15
    },
});

export default DailyOverview
