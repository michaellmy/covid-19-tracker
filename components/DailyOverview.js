import React, { Component } from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class DailyOverview extends Component {
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
                                this.props.records[this.props.dateIndex]["Confirmed"] - this.props.records[this.props.dateIndex - 1]["Confirmed"]
                                :
                                this.props.records[this.props.dateIndex]["Confirmed"]
                                }
                            </Text>
                        </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.tableBodyRecovered}>Recovered</Text></DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.tableBodyRecovered}>
                                { this.props.dateIndex != 0 ?
                                this.props.records[this.props.dateIndex]["Recovered"] - this.props.records[this.props.dateIndex - 1]["Recovered"]
                                :
                                this.props.records[this.props.dateIndex]["Recovered"]
                                }
                            </Text>
                        </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.tableBodyDeaths}>Deaths</Text></DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.tableBodyDeaths}>
                                { this.props.dateIndex != 0 ?
                                this.props.records[this.props.dateIndex]["Deaths"] - this.props.records[this.props.dateIndex - 1]["Deaths"]
                                :
                                this.props.records[this.props.dateIndex]["Deaths"]
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

export default DailyOverview
