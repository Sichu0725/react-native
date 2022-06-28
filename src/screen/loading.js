import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// @ts-ignore
import img1 from '../assets/splash_icon.png';
export const Loading = () => {
  return (
    <View style={style.container}>
      <Image
        source={img1}
        style={style.backgroundImage}
        resizeMode={'contain'}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: 'cover', // or 'stretch'
  },
});
