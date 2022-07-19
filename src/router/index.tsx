import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/logInScreen';
import SignUp from '../screens/signUpScreen';
import VerificationOtpScreen from '../screens/verificationOtpScreen';
import TermsScreen from '../screens/termsConditionScreen';
import FanAthelite from '../screens/fanAthelite';
import EditProfile from '../screens/completeProfile';
import ModalScreen from '../components/modal';
import ROUTE_NAMES from './routeNames';
import IdentityModal from '../components/identityModal';
import SportsListData from '../screens/completeProfile/sportsSelect';
import ZipCode from '../screens/completeProfile/zipCode';
import BottomTabComponent from './bottomtab';

const stack = createNativeStackNavigator();
const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />

      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name={ROUTE_NAMES.SPLASH} component={SplashScreen} />
        <stack.Screen name={ROUTE_NAMES.LOG_IN} component={LoginScreen} />
        <stack.Screen name={ROUTE_NAMES.SIGN_UP} component={SignUp} />
        <stack.Screen
          name={ROUTE_NAMES.OTP_VERIFICATION}
          component={VerificationOtpScreen}
        />
        <stack.Screen
          name={ROUTE_NAMES.CONGRATULATION}
          component={ModalScreen}
        />
        <stack.Screen
          name={ROUTE_NAMES.TERM_CONDITIONS}
          component={TermsScreen}
        />
        <stack.Screen name={ROUTE_NAMES.FAN_ATHLETE} component={FanAthelite} />
        <stack.Screen name={ROUTE_NAMES.EDIT_PROFILE} component={EditProfile} />
        <stack.Screen name={ROUTE_NAMES.MODAL} component={ModalScreen} />
        <stack.Screen
          name={ROUTE_NAMES.IDENTITY_MODAL}
          component={IdentityModal}
        />
        <stack.Screen
          name={ROUTE_NAMES.SPORT_LIST}
          component={SportsListData}
         />
        <stack.Screen name={ROUTE_NAMES.ZIPCODE} component={ZipCode} />
        <stack.Screen name='BottomTabComponent' component={BottomTabComponent}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationScreen;
