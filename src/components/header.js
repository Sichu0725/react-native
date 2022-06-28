import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export const Header = props => {
  return (
    <SafeAreaView style={style.header}>
      <Text style={style.title}>{props.headerTitle}</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {},
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#B4E197',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
