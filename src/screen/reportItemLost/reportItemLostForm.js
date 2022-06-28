import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dropdown, {DropdownItem} from 'rnative-dropdown';

export const ReportItemLostForm = () => {
  //작업예정
  const [select, setSelect] = useState('태그선택');
  return (
    <SafeAreaView style={style.div}>
      <Text style={style.title}>분실물 등록</Text>
      <View style={style.input}>
        <Text style={[style.formTitle]}>제목 : </Text>
        <TextInput
          style={{
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            flex: 1,
            paddingVertical: 5,
          }}
          placeholder="제목"
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={style.input}>
        <Pressable style={style.imgBtn}>
          <Text style={[style.color]}>이미지 업로드 </Text>
          <Icon name="camera-alt" size={24} color="black" />
        </Pressable>
      </View>
      <View style={style.input}>
        <Text style={style.tag}>태그 : </Text>
        <Dropdown label={select}>
          <DropdownItem label="학용품" onPress={() => setSelect('학용품')} />
          <DropdownItem label="의류" onPress={() => setSelect('의류')} />
          <DropdownItem
            label="전자기기"
            onPress={() => setSelect('전자기기')}
          />
          <DropdownItem label="기타" onPress={() => setSelect('기타')} />
        </Dropdown>
      </View>
      <View style={style.input}>
        <Text style={style.formTitle}>분실장소 : </Text>
        <TextInput
          style={{
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            flex: 1,
            paddingVertical: 5,
          }}
          placeholder="분실장소"
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={style.input}>
        <Text style={style.formTitle}>분실물 특징 : </Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={{
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            flex: 1,
            paddingVertical: 5,
          }}
          placeholder="분실물 특징"
          placeholderTextColor="#ccc"
        />
      </View>
      <Pressable
        style={{
          flexDirection: 'row-reverse',
          marginHorizontal: 15,
          marginVertical: 8,
        }}>
        <Text
          style={{
            color: '#121212',
            fontSize: 18,
            borderColor: '#ccc',
            borderWidth: 1,
            padding: 8,
            borderRadius: 8,
          }}>
          등록하기
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title: {
    color: '#121212',
    fontSize: 30,
    textAlign: 'center',
  },
  div: {
    padding: 8,
  },
  color: {
    marginHorizontal: 5,
    color: 'black',
  },
  formTitle: {
    color: 'black',
    fontSize: 20,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  imgBtn: {
    flexDirection: 'row',
    alignContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 12,
    width: 150,
    marginVertical: 5,
  },
  tag: {
    color: 'black',
    fontSize: 18,
  },
});
