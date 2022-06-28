import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './home';
import {ReportItemLostDetails} from '../reportItemLost/reportItemLostDetails';
import {LostAndFoundDetails} from '../lostAndFound/lostAndFoundDetails';
export const HomeStackSetting = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="AbandonedAnimalDetails"
        component={ReportItemLostDetails}
      />
      <Stack.Screen
        name="lostAndFoundDetails"
        component={LostAndFoundDetails}
      />
    </Stack.Navigator>
  );
};
