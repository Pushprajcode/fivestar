import React from 'react';
import {Image} from 'react-native';
import Activity from '../screens/activity';
import Account from '../screens/account';
import Search from '../screens/search';
import Home from '../screens/home';
import Upload from '../screens/upload';
import IMAGES from '../utils/localImages';
import COLOR from '../utils/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomTabComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: COLOR.WHITE,
        tabBarActiveTintColor: COLOR.PRIMARY_BLUE,

        tabBarStyle: {
          backgroundColor: COLOR.BLACK,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused, color}) => (
            <Image
              source={IMAGES.HOME_IMAGE}
              style={
                focused
                  ? [
                      {width: 21.18, height: 21.18},
                      {tintColor: COLOR.LIGHT_BLUE},
                    ]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.SEARCH_IMAGE}
              style={
                focused
                  ? [
                      {width: 21.18, height: 21.18},
                      {tintColor: COLOR.LIGHT_BLUE},
                    ]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.UPLOAD_IMAGE}
              style={
                focused
                  ? [
                      {width: 21.18, height: 21.18},
                      {tintColor: COLOR.LIGHT_BLUE},
                    ]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ACTIVITY_IMAGE}
              style={
                focused
                  ? [
                      {width: 21.18, height: 21.18},
                      {tintColor: COLOR.LIGHT_BLUE},
                    ]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ACCOUNT_IMAGE}
              style={
                focused
                  ? [
                      {width: 21.18, height: 21.18},
                      {tintColor: COLOR.LIGHT_BLUE},
                    ]
                  : {width: 21.18, height: 21.18}
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabComponent;
