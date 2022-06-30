import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import OtpAction from './action';
import { useNavigation } from '@react-navigation/native';
import COLOR from '../../utils/colors';
import CustomBackButton from '../../components/customBackButton';
import STRINGS from '../../utils/strings';
import { normalize } from '../../utils/dimension';
import ModalScreen from '../../components/modal';
export default function VerificationOtpScreen() {
  const navigation = useNavigation();
  //const phoneNo =useSelector((store:any)=>store.signUpReducer)

  const pin1 = useRef<any>(null);
  const pin2 = useRef<any>(null);
  const pin3 = useRef<any>(null);
  const pin4 = useRef<any>(null);
  const [otp, setOtp] = useState('')
  const arr = [pin1, pin2, pin3, pin4];
  // const dispatch = useDispatch();
  const Ref = useRef<any>(null);
  return (
    <SafeAreaView style={styles.safeAreastyle}>
      <View style={styles.mainViewStyle}>
        <CustomBackButton style={styles.backImageStyle} />

        <Text style={styles.enterVerification}>
          {STRINGS.TEXTLABLE.ENTER_VERIFICATION}
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate(ModalScreen)}>
        <Text style={styles.digitVerification}>
          {STRINGS.TEXTLABLE.CODE_SENT}
          {/* <Text>{phoneNo}</Text> */}
        </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>{'Edit'}</Text>
        </TouchableOpacity>


        <View style={styles.otpViewStyle}>
              <TextInput
                ref={pin1}
                maxLength={1}
                onChangeText={text => {
                  setOtp(otp => otp + text);
                  pin2.current.focus()
                }}
                style={styles.textInput}
              />
              <TextInput
                ref={pin2}
                maxLength={1}
                onChangeText={text => {
                  setOtp(otp => otp + text);
                  pin3.current.focus();
                }}
                style={styles.textInput}
              />
              <TextInput
                ref={pin3}
                maxLength={1}
                onChangeText={text => {
                  setOtp(otp => otp + text);
                  pin4.current.focus();
                }}
                style={styles.textInput}
              />
              <TextInput
                ref={pin4}
                maxLength={1}
                onChangeText={text => {
                  setOtp(otp => otp + text);
                  pin4.current.blur();
                }}
                style={styles.textInput}
              />
            </View>
        <TouchableOpacity
          onPress={() => {
           
            // dispatch(OtpAction(str));
          }}
          style={{
            backgroundColor: '#44C2E3',
            marginVertical: 40,
            paddingVertical: 17,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{ color: COLOR.WHITE }}>{'Submit'}</Text>
        </TouchableOpacity>
        <Text style={styles.ReecivedTextStyle}>
          {STRINGS.TEXTLABLE.RECIEVED}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FanAthelite');
          }}>
          <Text style={styles.resendVerification}>
            {STRINGS.TEXTLABLE.RESEND_VERIFICATION}
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
  backImageStyle: {
    marginLeft: normalize(25)

  },
  mainViewStyle: {
    marginHorizontal: 5,
  },
  backImage: {
    height: 20,
    width: 12,
  },
  otpViewStyle:{
     flexDirection:'row',
    // marginHorizontal:24
  },
  textinput: {
    backgroundColor: 'white',
    height: 48,
    width: 64,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    borderColor: '#FFFFFF'
  },
  enterVerification: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: normalize(24),

  },
  digitVerification: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontWeight:"400",
    marginHorizontal: normalize(30),
    lineHeight:normalize(16)
  },
  resendVerification: {
    color: '#44C2E3',
    alignSelf:'center'
  },
  textInput: {
    backgroundColor: '#000000',
    height: 50,
    width: 65,
    fontWeight: '900',
    fontSize: 30,
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 1,
    color: COLOR.PRIMARY_BLUE,
    textAlign: 'center',
    marginHorizontal:normalize(18)
  },
  inpView: {
    marginVertical:normalize(15),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ReecivedTextStyle:{
    color:COLOR.WHITE,
    alignSelf:'center',
    lineHeight:normalize(30)
    
  }

});
