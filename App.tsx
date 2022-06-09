import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './src/screens/screens/splashscreen'
import LoginScreen from './src/screens/screens/loginscreen'
import SignUp from './src/screens/screens/signup'
import TermsScreen from './src/screens/screens/TermsScreen'
import CounrtyCode from './src/CountryCode/CounrtyCode'

const stack=createNativeStackNavigator();
const App: React.FC = () =>{
  return (
      <NavigationContainer>
          <stack.Navigator
          screenOptions={{
            headerShown:false
          }}
          >
            <stack.Screen 
            name='SplashScreen'component={SplashScreen}
            />
            <stack.Screen name='LoginScreen'component={LoginScreen}/>
            <stack.Screen name='SignUp'component={SignUp}/>
            <stack.Screen name='TermsScreen'component={TermsScreen}/>
            <stack.Screen name='CounrtyCode'component={CounrtyCode}/>
          </stack.Navigator>
      </NavigationContainer>
    
  )
}
export default App;

const styles = StyleSheet.create({})