import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../screens/splashScreen/splashscreen';
import LoginScreen from '../../screens/logInScreen/loginscreen';
import SignUp from '../../screens/signUpScreen/signup';
import VerificationOtpScreen from '../../screens/verificationOtpScreen/verificationOtpScreen';
import CongratulationScreen from '../../screens/congratulationScreen/congratulationScreen';
const stack = createNativeStackNavigator();
const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="SplashScreen" component={SplashScreen} />
        <stack.Screen name="LoginScreen" component={LoginScreen} />
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="VerificationOtpScreen" component={VerificationOtpScreen}/>
        <stack.Screen name="CongratulationScreen" component={CongratulationScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;


