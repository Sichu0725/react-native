import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet, View, Pressable, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

export const Register = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>SIGN UP</Text>
      <View style={style.form}>
        <Text style={{textAlign: 'right'}}>*필수 입력 정보입니다.</Text>
        <TextInput
          style={style.input}
          placeholder="이름(ex 홍길동)"
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={style.input}
          placeholder="학번(ex 2118)"
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={style.input}
          placeholder="아이디"
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={style.input}
          placeholder="비밀번호"
          placeholderTextColor="#ddd"
        />
        <TextInput
          style={style.input}
          placeholder="비밀번호 확인"
          placeholderTextColor="#ddd"
          secureTextEntry
        />
      </View>
      <Pressable style={style.submitBtn}>
        <Text style={style.submitBtnText}>회원가입</Text>
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
    color: '#ffffff',
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
