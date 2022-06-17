import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import OtpAction from './action';
import OtpInput from '../../components/otpInput';
import {useNavigation} from '@react-navigation/native';
import COLOR from '../../utils/colors';
export default function VerificationOtpScreen() {
  const navigation = useNavigation();
  const arr = [1, 7, 8, 4];
  const [str, setStr] = useState('');
  const dispatch = useDispatch();
  const Ref = useRef<any>(null);
  return (
    <SafeAreaView style={styles.safeAreastyle}>
      <View style={styles.mainViewStyle}>
        <Image
          style={styles.backImage}
          source={require('../../assets/images/VectorBack.png')}
        />
        <Text style={styles.enterVerification}>
          {'Enter Verification Code'}
        </Text>
        <Text style={styles.digitVerification}>
          {'Kindly enter the 4 digit verification code sent to'}{' '}
          <TouchableOpacity>
            <Text>{'Edit'}</Text>
          </TouchableOpacity>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 32,
            backgroundColor: 'black',
          }}>
          {arr.map(item => {
            return (
              <OtpInput
                callBack={(txt: string) => {
                  let text = str + txt;
                  setStr(text);
                  console.log('jhgfdghjkj', text);
                }}
              />
            );
          })}
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
          <Text style={{color: COLOR.White}}>{'Submit'}</Text>
        </TouchableOpacity>
        <Text style={{color: 'white'}}>{'Didnt Received the Code yet? '}</Text>
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
    marginHorizontal: 23,
  },
  backImage: {
    height: 20,
    width: 12,
  },
  enterVerification: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  digitVerification: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  OtpBoxStyl: {
    backgroundColor: 'white',
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
