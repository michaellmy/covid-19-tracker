import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export class CountrySelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            countries: [
                {label: 'Malaysia', value: 'malaysia'}, 
            ]
        }
    }

    componentDidMount () {
        fetch ('https://api.covid19api.com/summary')
            .then ((res) => res.json())
            .then ((resJSON) => {
                var items = resJSON["Countries"].map(function(item) {
                    return {
                        label: item["Country"],
                        value: item["Slug"]
                    }
                })
                this.setState({countries: items})
            })
            .catch (err => console.log(err))
    } 

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}><Icon name='flag' size={17}>&nbsp;</Icon>{this.props.title}</Text>

                <DropDownPicker style={styles.dropdown}
                    items={this.state.countries}
                    defaultValue={this.props.country}
                    containerStyle={{height: 50}}
                    dropDownStyle={{backgroundColor: '#fafafa', height: 300}}
                    dropDownMaxHeight={300}
                    labelStyle={{fontSize: 17}}
                    onChangeItem={item => this.props.changeCountry(item.value)}
                    activeLabelStyle={{color: 'darkslateblue'}}
                    searchable={true}
                    searchablePlaceholder="Search Country"
                    searchableError="No Country Found"
                />
                <Text style={{fontSize: 5}}>{"\n"}</Text>
                <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'darkslateblue',
        fontSize: 17,
        marginVertical: 5,
        fontWeight: 'bold'
    },

    container: {
        marginHorizontal: 15,
        marginVertical: 8,
    },

    dropdown: {
      backgroundColor: '#fafafa',
    },
});

export default CountrySelector
