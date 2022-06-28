//전단지 작성 페이지
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginIntro} from './loginIntro';
import {Login} from './login';
import {Register} from './register';

export const LoginStackSetting = ({auth, setAuth}) => {
  const loginStack = createStackNavigator();

  return (
    <loginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <loginStack.Screen name="loginIntro">
        {props => <LoginIntro {...props} />}
      </loginStack.Screen>
      <loginStack.Screen name="login">
        {props => <Login {...props} setAuth={setAuth} />}
      </loginStack.Screen>
      <loginStack.Screen name="register">
        {props => <Register {...props} />}
      </loginStack.Screen>
    </loginStack.Navigator>
  );
};
