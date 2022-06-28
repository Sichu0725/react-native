import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const FloatingBtn = ({navigation, dest}) => {
  return (
    <Pressable
      style={style.goFormBtn}
      onPress={() => navigation.navigate(dest)}>
      <Icon
        name="mode-edit"
        size={28}
        color="white"
        style={{textAlign: 'center'}}
      />
    </Pressable>
  );
};

const style = StyleSheet.create({
  goFormBtn: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 50,
    backgroundColor: '#b4cbf3',
    padding: 8,
  },
});
