// @ts-nocheck
import {useRoute} from '@react-navigation/native';
import React, {useRef} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const LostAndFoundDetails = ({navigation}) => {
  const data = useRef(useRoute().params);

  return (
    <ScrollView style={{padding: 5, flex: 1}}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Image source={{uri: data.current.imgUrl}} style={style.img} />
        <View
          style={{
            justifyContent: 'space-evenly',
            flex: 1,
            paddingHorizontal: 5,
          }}>
          <Text style={style.title}>{data.current.title}</Text>
          <Text style={style.info}>획득장소 : {data.current.region}</Text>
          <Text style={style.info}>분류 : {data.current.tag}</Text>
        </View>
      </View>
      <Text style={style.text}>
        {'\t'}볼펜을...제 어릴적을 함께한 볼펜 "볼펜이"를 읿어버렸습니다.
        선생님들... 저희 볼펜이를 부디 가엾이 여기시고 제발 찾아주시옵소서..
        이러쿵 저러쿵..볼펜이가 다시 저의 품으로 돌아오길 간절히 바라며 저희
        볼펜이의 특징을 말해드리겠습니다......{'\n'}
        {'\t'}먼저 저희 볼펜이는 노란색입니다... 매우 상큼한 색깔이죠? 네 암튼
        그럽니다. 그렇다고요......{'\n'}---이후생략---{'\n'}
        마지막으로 볼펜이를 발견할 시 010-1234-5678로 전화해 주시길 바랍니다..!
      </Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 18,
    // borderBottomColor: '#ccc',
    // borderBottomWidth: 1,
  },
  info: {
    color: '#444444',
    fontSize: 18,
    // borderBottomColor: '#ccc',
    // borderBottomWidth: 1,
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    borderRadius: 8,
  },
  text: {
    flex: 2,
    marginVertical: 15,
    color: '#121212',
  },
});
