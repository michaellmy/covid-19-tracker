import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import GlobalScreen from './tabs/GlobalScreen';
import HomeScreen from './tabs/HomeScreen';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      country: 'malaysia'
    }
  }

  changeCountry = (value) => {
    this.setState({
      country: value
    })
  }


  render() {
    const Tab = createMaterialBottomTabNavigator();
    return (
      <NavigationContainer style={styles.container}>
         <Tab.Navigator  barStyle={{ backgroundColor: '#4028AC' }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon name='home' color={color} size={25}></Icon>
              ),
            }}/>

            <Tab.Screen name="Settings" component={GlobalScreen}  options={{
              tabBarLabel: 'Global',
              tabBarIcon: ({ color }) => (
                <Icon name='globe' color={color} size={25}></Icon>
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
