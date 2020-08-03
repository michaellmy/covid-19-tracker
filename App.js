import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Alert, ActivityIndicator, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Snackbar from 'react-native-snackbar';
import NetInfo from "@react-native-community/netinfo";

import StatsScreen from './components/tabs/StatsScreen';
import HomeScreen from './components/tabs/HomeScreen';
import Header from './components/Header'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      country: 'malaysia',
      isLoading: true
    }
  }

  componentDidMount () {
    this.checkConnection();
  }

  componentDidUpdate (pP, pS, SS){
    if(pS.country !== this.state.country){
      this.checkConnection();
    }
  }

  checkConnection = () => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        this.setState({isLoading: true});
        Alert.alert(
          "Network Error",
          "Could not connect to the Internet.",
          [
            { text: "Retry", onPress: () => this.checkConnection()}
          ],
          { cancelable: false }
        );
      } 
      else { this.setState({isLoading: false}) }
    });
  }

  reload = () => { this.setState({country: 'malaysia'}) }

  changeCountry = (value) => {
    var oldCountry = this.state.country;
    this.setState({ country: value })
    Snackbar.show({
      text: 'Country Changed!',
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: 'steelblue',
      textColor: 'white',
      action: {
        text: 'UNDO',
        textColor: 'azure',
        onPress: () => { this.changeCountry(oldCountry) },
      }
    });
  }

  render() {
    const Tab = createMaterialBottomTabNavigator();
    
    if(this.state.isLoading) {
      return ( 
      <View>
        <Header/>
        <ActivityIndicator size="large" color="#0000ff" style={styles.spinner}/>
      </View>)
    }

    else{
      return (
        <NavigationContainer style={styles.container}>
           <Tab.Navigator  barStyle={{ backgroundColor: '#4028AC' }}>
              <Tab.Screen name="Home" children={() => 
                <HomeScreen changeCountry={this.changeCountry} country={this.state.country} reload={this.reload}/>} 
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color }) => (
                    <Icon name='home' color={color} size={25}></Icon>
                  ),
                }}
              />
  
            <Tab.Screen name="Statistics" children={() => <StatsScreen country={this.state.country} reload={this.reload} />} options={{
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  spinner: {
      flex: 1,
      marginVertical: Dimensions.get('window').height,
      justifyContent: 'center',
      alignItems:'center'    
  }
});

export default App;
