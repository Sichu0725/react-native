import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet, View, Pressable, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

export const Login = ({navigation, setAuth}) => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>LOGIN</Text>
      <View style={style.form}>
        <TextInput
          style={style.input}
          placeholder="아이디"
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={style.input}
          placeholder="비밀번호"
          placeholderTextColor="#ddd"
          secureTextEntry
        />
      </View>
      <Pressable style={style.submitBtn} onPress={() => setAuth(1)}>
        <Text style={style.submitBtnText}>로그인</Text>
      </Pressable>
      <Pressable
        style={style.registerBtn}
        onPress={() => navigation.navigate('register')}>
        <Text style={style.registerBtnText}>회원가입</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 30,
  },
  form: {marginBottom: 30},
  input: {
    color: 'white',
    backgroundColor: '#212121',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 0.01,
    paddingVertical: 0,
    marginVertical: 3,
  },
  submitBtn: {
    backgroundColor: '#6b6d85',
  },
  submitBtnText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
  },
  registerBtn: {},
  registerBtnText: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
