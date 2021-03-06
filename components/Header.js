import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}><Icon name='bug' size={20}>&nbsp;</Icon>{title} </Text>
      <Text style={styles.subText}>Latest COVID-19 Information </Text>
    </View>
  );
};

Header.defaultProps = {
    title: 'COVIDStats'
}


const styles = StyleSheet.create({
  header: {
    height: 65,
    padding: 8,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center'
  },
  subText: {
    color: 'azure',
    fontSize: 14,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center'
  }
});

export default Header;
