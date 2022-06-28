import React, {useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
import {HomeStackSetting} from './screen/home/homeStackSetting';
import {LostAndFoundStackSetting} from './screen/lostAndFound/lostAndFoundStackSetting';
import {ReportItemLostStackSetting} from './screen/reportItemLost/reportItemLostStackSetting';
import {LoginStackSetting} from './screen/login/loginStackSetting';
export const Router = () => {
  const [auth, setAuth] = useState(0); //로그인 페이지 구현 후 1로 변경
  const Tab = createMaterialBottomTabNavigator();

  // Toast 메세지 출력
  if (auth) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeSetting"
          activeColor="white"
          inactiveColor="#ccc"
          barStyle={style.tabbar}>
          <Tab.Screen
            name="HomeSetting"
            component={HomeStackSetting}
            options={{
              tabBarIcon: () => <Icon name="home" size={26} color="white" />,
              title: '홈',
              tabBarColor: 'black',
            }}
          />
          <Tab.Screen
            name="AbandonedAnimal"
            component={ReportItemLostStackSetting}
            options={{
              tabBarIcon: () => (
                <Icon name="mode-edit" size={26} color="white" />
              ),
              title: '분실물 등록',
              tabBarColor: 'black',
            }}
          />
          <Tab.Screen
            name="AnimalGcenter" //animal Guard center
            component={LostAndFoundStackSetting}
            options={{
              tabBarIcon: () => (
                <Icon name="note-add" size={26} color="white" />
              ),
              title: '분실물 센터',
              tabBarColor: 'black',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    //login 페이지 띄울 예정
    return (
      <NavigationContainer>
        <LoginStackSetting auth={auth} setAuth={setAuth} />
      </NavigationContainer>
    );
  }
};
const style = StyleSheet.create({
  tabbar: {
    backgroundColor: 'black',
    borderTopColor: '#ccc',
    borderTopWidth: 0.7,
  },
});
