//전단지 작성 페이지
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LostAndFound} from './lostAndFound';
import {LostAndFoundForm} from './lostAndFoundForm';
import {LostAndFoundDetails} from './lostAndFoundDetails';

export const LostAndFoundStackSetting = () => {
  const LAFStack = createStackNavigator();

  return (
    <LAFStack.Navigator
      screenOptions={{
        title: '너의 연인빼고 다 찾아줄게!',
        headerStyle: {
          borderBottomColor: 'white',
          borderBottomWidth: 2,
          // backgroundColor: '#B4E197',
          backgroundColor: '#212121',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'gungseo',
          color: 'white',
        },
      }}>
      <LAFStack.Screen name="lostAndFound" component={LostAndFound} />
      <LAFStack.Screen name="lostAndFoundForm" component={LostAndFoundForm} />
      <LAFStack.Screen
        name="lostAndFoundDetails"
        component={LostAndFoundDetails}
      />
    </LAFStack.Navigator>
  );
};
