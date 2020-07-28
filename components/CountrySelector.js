import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export class CountrySelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            countries: [
                {label: 'Malaysia', value: 'malaysia'}, 
            ],
            isLoading: true
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
            .then((res) => this.setState({isLoading: false}))
            .catch (err => console.log("Error in CountrySelector: " + err))
    } 

    render() {
        if (this.state.isLoading) {
            return (<View><ActivityIndicator size="large" color="#0000ff" style={styles.spinner}/></View>)
        }
        else {
            return (
                <View>
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
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    dropdown: {
      backgroundColor: '#fafafa',
    },

    spinner: {
        flex: 1,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems:'center'    
    }
});

export default CountrySelector
