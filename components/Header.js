import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}><Icon name='bug' size={20}>&ensp;</Icon>{title} </Text>
      <Text style={styles.subText}>Latest COVID-19 Information </Text>
    </View>
  );
};

Header.defaultProps = {
    title: 'MyCovidTracker'
}


const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 8,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  subText: {
    color: 'azure',
    fontSize: 14,
    textAlign: 'center'
  }
});

export default Header;
