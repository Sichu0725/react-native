import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ReportItemLostDetails} from './reportItemLostDetails';
import {ReportItemLost} from './reportItemLost';
import {ReportItemLostForm} from './reportItemLostForm';

export const ReportItemLostStackSetting = () => {
  const Stack2 = createStackNavigator();

  return (
    <Stack2.Navigator
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
      <Stack2.Screen name="reportItemLost" component={ReportItemLost} />
      <Stack2.Screen
        name="AbandonedAnimalDetails"
        component={ReportItemLostDetails}
      />
      <Stack2.Screen name="reportItemLostForm" component={ReportItemLostForm} />
    </Stack2.Navigator>
  );
};
