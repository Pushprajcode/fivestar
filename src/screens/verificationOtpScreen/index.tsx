import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import OtpAction from './action';
import {useNavigation} from '@react-navigation/native';
import COLOR from '../../utils/colors';
import CustomBackButton from '../../components/customBackButton';
import STRINGS from '../../utils/strings';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
export default function VerificationOtpScreen() {
  const navigation = useNavigation();
 
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [str, setStr] = useState('');
  const arr = [pin1,pin2,pin3,pin4];
  const dispatch = useDispatch();
  const Ref = useRef<any>(null);
  return (
    <SafeAreaView style={styles.safeAreastyle}>
      <View style={styles.mainViewStyle}>
        <CustomBackButton />

        <Text style={styles.enterVerification}>
          {'Enter Verification Code'}
        </Text>
        <Text style={styles.digitVerification}>
          {STRINGS.TEXTLABLE.CODE_SENT}{' '}
          <TouchableOpacity>
            <Text>{'Edit'}</Text>
          </TouchableOpacity>
        </Text>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 32,
            backgroundColor: 'black',
          }}>
          {arr.map(arr=> {
          //   return (
             
          //       // callBack={(txt: string) => {
          //          text = str + arr;
          //        setStr(text);
          //         console.log('jhgfdghjkj', text);
          //       // }}
  
          //   )
          // })}
        </View> */}
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.textinput}
            value={pin1}
            maxLength={1}
            onChangeText={text => {
              setPin1(text);
              if (pin1 != '') {
                 //ref.focus()
                
              }
            }}
          />
          <TextInput
            style={styles.textinput}
            value={pin2}
            maxLength={1}
            onChangeText={text => {
              setPin2(text);
              if (pin2 != '') {
              }
            }}
          />
          <TextInput
            style={styles.textinput}
            value={pin3}
            maxLength={1}
            onChangeText={text => {
              setPin3(text);
              if (pin3 != '') {
              }
            }}
          />
          <TextInput
            style={styles.textinput}
            value={pin4}
            maxLength={1}
            onChangeText={text => {
              setPin4(text);
              if (pin4 != '') {
              }
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log(str);
            dispatch(OtpAction(str));
          }}
          style={{
            backgroundColor: '#44C2E3',
            marginVertical: 40,
            paddingVertical: 17,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: COLOR.WHITE}}>{'Submit'}</Text>
        </TouchableOpacity>
        <Text style={{color: COLOR.WHITE}}>
          {'Didnt Received the Code yet? '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FanAthelite');
          }}>
          <Text style={styles.resendVerification}>
            {'Resend Verification Code'}
          </Text>
        </TouchableOpacity>
        <Image
          style={{
            resizeMode: 'contain',
            width: 333,
            height: 354,
            bottom: 0,
            top: 75,
          }}
          source={require('../../assets/images/Boxer.png')}
        />
      </View>
    </SafeAreaView>
  );
}

//useRef(null), text1, text2
//onChangeText input - { () => {
//   if(text = 1)
//   set
//   ref.focus()
// }}

const styles = StyleSheet.create({
  safeAreastyle: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainViewStyle: {
    marginHorizontal: 5,
  },
  backImage: {
    height: 20,
    width: 12,
  },
  textinput:{
    
      backgroundColor: 'white',
      height: 48,
      width: 64,
      alignItems: 'center',
      marginHorizontal: 20,

  },
  enterVerification: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  digitVerification: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },

  OtpBoxStyl: {
    backgroundColor: COLOR.WHITE,
    height: 48,
    width: 64,
    paddingHorizontal: 25,
    fontSize: 20,
    borderRadius: 5,
  },

  resendVerification: {
    color: '#44C2E3',
  },
});
