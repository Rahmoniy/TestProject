import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Launch, Login, Home} from '../screens';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
  gestureEnabled: true,
  // ...TransitionPresets.SlideFromRightIOS,
};

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="launch">
      <Stack.Screen options={options} name="launch" component={Launch} />
      <Stack.Screen options={options} name="login" component={Login} />
      <Stack.Screen options={options} name="home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
