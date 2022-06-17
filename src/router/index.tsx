import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/logInScreen';
import SignUp from '../screens/signUpScreen';
import VerificationOtpScreen from '../screens/verificationOtpScreen';
import CongratulationScreen from '../screens/congratulationScreen';
import TermsScreen from '../screens/termsConditionScreen';
import FanAthelite from '../screens/fanAthelite';
import CompleteProfile from '../screens/profileScreen';

const stack = createNativeStackNavigator();
const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />

      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="SplashScreen" component={SplashScreen} />
        <stack.Screen name="LoginScreen" component={LoginScreen} />
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen
          name="VerificationOtpScreen"
          component={VerificationOtpScreen}
        />
        <stack.Screen
          name="CongratulationScreen"
          component={CongratulationScreen}
        />
        <stack.Screen name="TermsScreen" component={TermsScreen} />
        <stack.Screen name="FanAthelite" component={FanAthelite} />
        <stack.Screen name="CompleteProfile" component={CompleteProfile} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationScreen;
