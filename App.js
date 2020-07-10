import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Snackbar from 'react-native-snackbar';

import StatsScreen from './tabs/StatsScreen';
import HomeScreen from './tabs/HomeScreen';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      country: 'malaysia',
    }
  }

  componentDidMount () {
    this.setState({country: 'malaysia'})
  }

  changeCountry = (value) => {
    var oldCountry = this.state.country;
    this.setState({ country: value })
    Snackbar.show({
      text: 'Country Changed!',
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: 'steelblue',
      textColor: 'azure',
      action: {
        text: 'UNDO',
        textColor: 'azure',
        onPress: () => { this.changeCountry(oldCountry) },
      }
    });
  }

  render() {
    const Tab = createMaterialBottomTabNavigator();
    return (
      <NavigationContainer style={styles.container}>
         <Tab.Navigator  barStyle={{ backgroundColor: '#4028AC' }}>
            <Tab.Screen name="Home" children={() => <HomeScreen changeCountry={this.changeCountry} country={this.state.country} />} options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon name='home' color={color} size={25}></Icon>
              ),
            }}/>

          <Tab.Screen name="Statistics" children={() => <StatsScreen country={this.state.country} />} test={"test"} options={{
              tabBarLabel: 'Statistics',
              tabBarIcon: ({ color }) => (
                <Icon name='bar-chart' color={color} size={25}></Icon>
              ),
            }}/>

          </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default App;
