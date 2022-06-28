import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Banner} from '../../components/banner';
import {FloatingBtn} from '../../components/floatingBtn';

export const LostAndFound = ({navigation}) => {
  const data = [
    {
      imgUrl:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: '하얀색 샤프를 습득하였습니다.',
      region: '2-3',
      tag: '학용품',
    },
    {
      imgUrl:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: '강당에 물통 놔두고 간 게이없냐?',
      region: '강당',
      tag: '생활용품',
    },
    {
      imgUrl:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: '양말 주인을 찾습니다.',
      region: '기숙사 210호',
      tag: '의류',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#212121'}}>
      {/* 검색바 */}
      <View>
        <Banner />
        <View style={style.searchForm}>
          <TextInput
            style={style.search}
            placeholderTextColor="white"
            placeholder="검색"
          />
          <Pressable style={style.searchBtn}>
            <Icon name="search" size={24} color="black" />
          </Pressable>
        </View>
      </View>
      {/* 리스트 */}
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('lostAndFoundDetails', {
                  imgUrl: item.imgUrl,
                  title: item.title,
                  region: item.region,
                  tag: item.tag,
                })
              }
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
              }}>
              <Image source={{uri: item.imgUrl}} style={style.thumnail} />
              <View
                style={{
                  paddingHorizontal: 10,
                }}>
                <Text style={style.title}>{item.title}</Text>
                <Text style={{color: 'white'}}>
                  분실장소 : {item.region}
                  {'\t'}
                  {'\t'}
                  {'\t'}분류 : {item.tag}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
      <FloatingBtn navigation={navigation} dest="lostAndFoundForm" />
    </SafeAreaView>
  );
};

const imgSize = 70;
const style = StyleSheet.create({
  searchForm: {
    flexDirection: 'row',
    marginTop: 5,
    paddingHorizontal: 4,
  },
  search: {
    borderColor: '#999999',
    borderWidth: 1,
    flex: 5,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 10,
  },
  searchBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#999999',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: 'white',
  },
  thumnail: {
    width: imgSize,
    height: imgSize,
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontSize: 18,
    marginVertical: 11,
  },
});
