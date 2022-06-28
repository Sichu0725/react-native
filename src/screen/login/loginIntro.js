import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import logo from '../../assets/logo.png';

export const LoginIntro = ({setAuth, navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image source={logo} style={style.logo} />
        <Text style={style.notice}>서비스를 이용하시려면 로그인하세요.</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('login')}>
        <Text style={style.loginBtn}>로그인</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('register')}>
        <Text style={style.registerBtn}>회원가입</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#212121',
  },
  notice: {
    color: '#ccc',
  },
  loginBtn: {
    color: '#212121',
    fontSize: 24,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    borderWidth: 3,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 5,
    width: 230,
    textAlign: 'center',
  },
  registerBtn: {
    color: '#ffffff',
    fontSize: 24,
    borderColor: '#ffffff',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 5,
    width: 230,
    textAlign: 'center',
  },
});
