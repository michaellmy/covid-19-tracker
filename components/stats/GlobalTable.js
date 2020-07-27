import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export class GlobalTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch(`https://api.covid19api.com/summary`)
            .then((res) => res.json())
            .then((resJSON) => {
                this.setState({
                    records: resJSON["Global"],
                })
            })
            .then(res => this.setState({ isLoading: false }))
            .catch((error => console.log('error in GlobalTable.js', error)))
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        if (this.state.isLoading) {
            return (<ActivityIndicator size="large" color="#0000ff" style={styles.spinner} />)
        }

        else{ 
            return (
                <View>
                    <DataTable style={styles.table}>
                        <DataTable.Header>
                            <DataTable.Title><Text style={styles.tableHeader}><Icon name='bars' size={16}>&ensp;</Icon>Category</Text></DataTable.Title>
                            <DataTable.Title numeric><Text style={styles.tableHeader}>New Cases</Text></DataTable.Title>
                            <DataTable.Title numeric><Text style={styles.tableHeader}>Total Cases</Text></DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell><Text style={styles.tableBodyConfirmed}>Confirmed</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={styles.tableBodyConfirmed}>{this.numberWithCommas(this.state.records["NewConfirmed"])}</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={styles.tableBodyConfirmed}>{this.numberWithCommas(this.state.records["TotalConfirmed"])}</Text></DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell><Text style={styles.tableBodyRecovered}>Recovered</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={styles.tableBodyRecovered}>{this.numberWithCommas(this.state.records["NewRecovered"])}</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={styles.tableBodyRecovered}>{this.numberWithCommas(this.state.records["TotalRecovered"])}</Text></DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell><Text style={styles.tableBodyDeaths}>Deaths</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={styles.tableBodyDeaths}>{this.numberWithCommas(this.state.records["NewDeaths"])}</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={styles.tableBodyDeaths}>{this.numberWithCommas(this.state.records["TotalDeaths"])}</Text></DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    <Text style={{fontSize: 6}}>{"\n"}</Text>
                </View>
            )
        }
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

    spinner: {
        flex: 1,
        marginVertical:30,
        justifyContent: 'center',
        alignItems:'center'    
    }
});

export default GlobalTable;
