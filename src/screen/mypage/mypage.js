import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import myImg from '../../assets/myImg.jpg';
import moment from 'moment';
import VirtualizedView from '../../components/virtualizedView';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
export const MypageStackSetting = () => {
  const MypageStack = createStackNavigator();
  return (
    <MypageStack.Navigator
      screenOptions={{
        title: '너의 연인빼고 다 찾아줄게!',
        headerStyle: {
          borderBottomColor: '#B4E197',
          borderBottomWidth: 4,
          // backgroundColor: '#B4E197',
          backgroundColor: 'rgba(180, 225, 97, 0.5)',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'gungseo',
          color: '#121212',
        },
      }}>
      <MypageStack.Screen name="mypage" component={Mypage} />
    </MypageStack.Navigator>
  );
};

const Mypage = () => {
  const data = [
    ['연필을 잃어버렸습니다.'],
    ['셔츠 주인을 찾습니다.', '누구인가? 누가 분실 소리를 내었어'],
  ];
  return (
    <SafeAreaView>
      <VirtualizedView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 15,
            borderColor: '#B4E197',
            borderWidth: 3,
            marginHorizontal: 8,
            borderRadius: 8,
            padding: 15,
          }}>
          <Image style={style.myImg} source={myImg} />
          <View>
            <Text style={style.myInfo}>
              이름 : 최홍찬{'\n'}
              학교 : 경북소프트웨어고등학교{'\n'}
              학번 : 2118
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 15,
            borderColor: '#B4E197',
            borderWidth: 3,
            marginHorizontal: 8,
            borderRadius: 8,
            padding: 15,
          }}>
          <View>
            <Text style={style.subTitle}>내가 쓴 분실물 등록글 (최근 5개)</Text>
            <View>
              {data[0].length > 0 ? (
                data[0].map(item => {
                  return (
                    <Text
                      style={style.inforContainerText}
                      key={
                        moment().valueOf().toString() + Math.random().toString()
                      }>
                      {item}
                    </Text>
                  );
                })
              ) : (
                <Text style={style.inforContainerText}>
                  등록한 글이 없습니다.
                </Text>
              )}
            </View>
          </View>
          <View>
            <Text style={style.subTitle}>내가 쓴 분실물 센터글 (최근 5개)</Text>
            <View>
              {data[1].length > 0 ? (
                data[1].map(item => {
                  return (
                    <Text
                      style={style.inforContainerText}
                      key={
                        moment().valueOf().toString() + Math.random().toString()
                      }>
                      {item}
                    </Text>
                  );
                })
              ) : (
                <Text style={style.inforContainerText}>
                  등록한 글이 없습니다.
                </Text>
              )}
            </View>
          </View>
        </View>
        <Pressable>
          <Text></Text>
        </Pressable>
      </VirtualizedView>
    </SafeAreaView>
  );
};

const myImgSize = 120;
const style = StyleSheet.create({
  myImg: {
    width: myImgSize,
    height: myImgSize,
    resizeMode: 'stretch',
    borderRadius: 60,
    marginHorizontal: 12,
    borderColor: '#121212',
    borderWidth: 1,
  },
  myInfo: {
    color: 'black',
    lineHeight: 30,
    fontSize: 17,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 18,
    color: 'black',
  },
  inforContainer: {
    padding: 8,
  },
  inforContainerText: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#121212',
    padding: 5,
  },
});
