//전단지 작성 페이지
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
import VirtualizedView from '../../components/virtualizedView';

export const ReportItemLost = ({navigation}) => {
  const data = [
    {
      imgUrl:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: '볼펜을 잃어버렸습니다..!',
      region: '2-1',
      tag: '학용품',
    },
    {
      imgUrl:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: '태블릿을 잃어버렸습니다..!',
      region: '2-1',
      tag: '전자기기',
    },
    {
      imgUrl:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: '내 라면 누가 가져갔냐',
      region: '2-1',
      tag: '음식 is food',
    },
    {
      imgUrl:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: 'db 비밀번호를 까먹었다..☆',
      region: '2-1',
      tag: 'halp me!',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#212121'}}>
      <VirtualizedView>
        <Banner />
        <View style={style.searchForm}>
          <TextInput
            style={style.search}
            placeholderTextColor="white"
            placeholder="검색"
          />
          <Pressable style={style.searchBtn}>
            <Icon name="search" size={24} color="#212121" />
          </Pressable>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate('AbandonedAnimalDetails', {
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
                  borderBottomWidth: 0.3,
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
      </VirtualizedView>
      <FloatingBtn navigation={navigation} dest="reportItemLostForm" />
    </SafeAreaView>
  );
};

const imgSize = 70;
const style = StyleSheet.create({
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
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#999999',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
