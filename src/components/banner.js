import React from 'react';
import {View, Pressable, Image, StyleSheet} from 'react-native';
import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';

export const Banner = () => {
  return (
    <View>
      <Pressable
        onPressOut={() =>
          Linking.openURL('https://cafe.naver.com/lovepetourselves')
        } //추후에 카페 URL넣으면 될듯
        style={({pressed}) => [
          {
            marginTop: 5,
            marginBottom: 5,
          },
        ]}>
        <Image style={style.banner} source={banner} />
      </Pressable>
      <Image style={style.banner} source={banner2} />
    </View>
  );
};

const style = StyleSheet.create({
  banner: {
    width: '100%',
    height: 70,
    resizeMode: 'stretch',
  },
});
