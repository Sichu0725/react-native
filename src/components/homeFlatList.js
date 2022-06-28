import React from 'react';

import {FlatList, Pressable, View, Image, Text, StyleSheet} from 'react-native';

export const HomeFlatList = ({navigation, data}) => {
  return (
    <FlatList
      nestedScrollEnabled={true}
      key="#"
      keyExtractor={item => '#' + item.key}
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
              <Image style={style.listImg} source={{uri: item.imgUrl}} />
              <Text style={style.listAtt}>
                제목 : {'\n'}
                {item.title}
                {'\n'}
                분실장소 : {item.region}
              </Text>
            </View>
          </Pressable>
        );
      }}></FlatList>
  );
};

const style = StyleSheet.create({
  listAtt: {
    color: 'black',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
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
    borderRadius: 15,
  },
  listImg: {
    maxWidth: 170,
    width: 170,
    height: 170,
    resizeMode: 'stretch',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});
