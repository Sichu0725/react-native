import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Pressable,
  Linking,
  Image,
  LogBox,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import VirtualizedView from '../../components/virtualizedView';
import moment from 'moment';
import profile from '../../assets/myImg.jpg';
export const Home = ({navigation}) => {
  const data = [
    {
      imgUrl:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: '볼펜을 잃어버렸습니다.',
      region: '2-1',
    },
    {
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU',
      title: '길동이를 찾아주세요',
      region: '대구',
    },
    {
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU',
      title: '길동삼를 찾아주세요',
      region: '대구',
    },
    {
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU',
      title: '길동사를 찾아주세요',
      region: '대구',
    },
    //{key: cnt++, imgUrl: 1, title: "닉부이치치 시발", region:"의성", money:"1만원"}
  ];

  const data2 = [
    {
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU',
      title: '이거 주인 ㄴㄱ?',
      region: '대구',
      tel: '010 - 6682 - 9325',
    },
    {
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU',
      title: '이거 주인 ㄴㄱ?',
      region: '대구',
      tel: '010 - 6682 - 9325',
    },
    {
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU',
      title: '이거 주인 ㄴㄱ?',
      region: '대구',
      tel: '010 - 6682 - 9325',
    },
    {
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU',
      title: '이거 주인 ㄴㄱ?',
      region: '대구',
      tel: '010 - 6682 - 9325',
    },
  ];
  //에러 보기 싫음 ㅋㅋ
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ]);
  return (
    <SafeAreaView style={style.container}>
      <VirtualizedView>
        {/* <ScrollView> */}
        <View style={style.profile}>
          <Image source={profile} style={style.profileImg} />
          <View style={style.profileInfo}>
            <Text style={style.profileInfoText}>이름 : 최홍찬</Text>
            <Text style={style.profileInfoText}>
              학교 : 경북소프트웨어고등학교
            </Text>
            <Text style={style.profileInfoText}>학번 : 2118</Text>
          </View>
        </View>
        <View style={style.div}>
          <Text style={style.subTitle}>[ HELP! ] 분실물 목록</Text>
          <View style={[style.center]}>
            <FlatList
              contentContainerStyle={{flex: 1}}
              listKey={moment().valueOf().toString()}
              data={data}
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <Pressable
                    onPress={() =>
                      navigation.navigate('AbandonedAnimalDetails', {
                        imgUrl: item.imgUrl,
                        title: item.title,
                        region: item.region,
                      })
                    }>
                    <View style={style.listDiv}>
                      <Image
                        style={style.listImg}
                        source={{uri: item.imgUrl}}
                      />
                      <Text style={style.listAtt}>
                        제목 : {'\n'}
                        {item.title}
                        {'\n'}
                        분실장소 : {item.region}
                      </Text>
                    </View>
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
        <View style={style.div}>
          <Text style={style.subTitle}>[ TAKE! ] 습득물</Text>
          <View style={style.center}>
            <FlatList
              contentContainerStyle={{flex: 1}}
              listKey={moment().valueOf().toString()}
              data={data2}
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <Pressable
                    onPress={() =>
                      navigation.navigate('lostAndFoundDetails', {
                        imgUrl: item.imgUrl,
                        title: item.title,
                        region: item.region,
                      })
                    }>
                    <View style={style.listDiv}>
                      <Image
                        style={style.listImg}
                        source={{uri: item.imgUrl}}
                      />
                      <Text style={style.listAtt}>
                        제목 : {'\n'}
                        {item.title}
                        {'\n'}
                        분실장소 : {item.region}
                      </Text>
                    </View>
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </VirtualizedView>
    </SafeAreaView>
  );
};

const profileSize = 100;

const style = StyleSheet.create({
  subTitle: {
    color: 'white',
    backgroundColor: '#212121',
    padding: 5,
    fontSize: 17,
    paddingHorizontal: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  div: {
    marginBottom: 5,
  },
  center: {
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
  },
  listImg: {
    maxWidth: 170,
    width: 170,
    height: 170,
    resizeMode: 'stretch',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  listAtt: {
    color: 'black',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    minWidth: 170,
  },
  listDiv: {
    marginHorizontal: 5,
    marginVertical: 3,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
    maxWidth: 170,
    minWidth: 170,
    borderRadius: 8,
  },
  container: {
    backgroundColor: '#212121',
  },
  profileImg: {
    width: profileSize,
    height: profileSize,
    borderRadius: 8,
  },
  profile: {
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
  },
  profileInfo: {
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
  },
  profileInfoText: {
    color: 'white',
  },
});
