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

import {useNavigation} from '@react-navigation/native';
import COLOR from '../../utils/colors';
import CustomBackButton from '../../components/customBackButton';
import STRINGS from '../../utils/strings';
import {normalize, vh, vw} from '../../utils/dimension';
import ModalScreen from '../../components/modal';
import {DisabledButton, EnabledButton} from '../../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import OtpAction from './action';
import {store} from '../../redux/reducer/store';
import IMAGES from '../../utils/localImages';
export default function VerificationOtpScreen() {
  const {countryCode, phoneNo, userId} = useSelector(
    (store: any) => store.signUpReducer,
  );
  const navigation = useNavigation<any>();

  const pin1 = useRef<any>(null);
  const pin2 = useRef<any>(null);
  const pin3 = useRef<any>(null);
  const pin4 = useRef<any>(null);
  const [otp, setOtp] = useState('');
  const arr = [pin1, pin2, pin3, pin4];
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch: Function = useDispatch();

  const Ref = useRef<any>(null);
  const onpressModal = () => {
    console.log('Inside onpress modal');
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.safeAreastyle}>
      <View>
        <CustomBackButton style={styles.backImageStyle} />
        {isModalVisible && <ModalScreen />}
        <Text style={styles.enterVerification}>
          {STRINGS.TEXTLABLE.ENTER_VERIFICATION}
        </Text>

        <Text style={styles.digitVerification}>
          {STRINGS.TEXTLABLE.CODE_SENT}
        </Text>

        <TouchableOpacity>
          <Text>{'Edit'}</Text>
        </TouchableOpacity>

        <View style={styles.otpViewStyle}>
          <TextInput
            ref={pin1}
            maxLength={1}
            onChangeText={text => {
              if (text.length > 0) {
                setOtp(otp => otp + text);
                pin2.current.focus();
              }
            }}
            style={styles.textInput}
          />
          <TextInput
            ref={pin2}
            maxLength={1}
            onChangeText={text => {
              if (text.length > 0) {
                setOtp(otp => otp + text);
                pin3.current.focus();
              }
            }}
            style={styles.textInput}
          />
          <TextInput
            ref={pin3}
            maxLength={1}
            onChangeText={text => {
              if (text.length > 0) {
                setOtp(otp => otp + text);
                pin4.current.focus();
              }
            }}
            style={styles.textInput}
          />
          <TextInput
            ref={pin4}
            maxLength={1}
            onChangeText={(text: string) => {
              if (text.length > 0) setOtp(otp => otp + text);
            }}
            style={styles.textInput}
          />
        </View>

        {otp.length === 4 ? (
          <EnabledButton
            label="submit"
            onPress={() => {
              dispatch(
                OtpAction(
                  otp,
                  countryCode,
                  phoneNo,
                  userId,
                  (data: any) => {
                    if (data.data.statusCode == 200) {
                      console.log('Inside if', data.data.statusCode);
                      onpressModal();
                    }
                  },
                  (err: any) => {
                    console.log('Error', err);
                  },
                ),
              );
            }}
            style={styles.buttonStyle}
          />
        ) : (
          <DisabledButton label='SUBMIT' style={styles.buttonStyle} />
        )}
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
        <Image style={styles.boxerImageStyle} source={IMAGES.Boxer_IMAGE} />
        <View>
          <Image style={styles.footerImageStyle} source={IMAGES.FOOTER_IMAGE} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreastyle: {
    flex: 1,
    backgroundColor: 'black',
  },
  backImageStyle: {
    marginLeft: normalize(25),
  },
  backImage: {
    height: 20,
    width: 12,
  },
  otpViewStyle: {
    flexDirection: 'row',
  marginTop:normalize(34)
  },
  enterVerification: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: normalize(24),
    fontStyle:"italic"
  },
  digitVerification: {
    color: COLOR.WHITE,
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: normalize(30),
    lineHeight: normalize(16),
  },
  resendVerification: {
    color: COLOR.LIGHT_BLUE,
    alignSelf: 'center',
    fontStyle:'italic',
    fontWeight:'900',
    fontSize:normalize(14)
  },
  textInput: {
    backgroundColor: COLOR.BLACK,
    height: vh(48),
    width: vw(64),
    fontWeight: '900',
    fontSize: 30,
    borderRadius: 5,
    borderColor: COLOR.WHITE,
    borderWidth: 1,
    color: COLOR.PRIMARY_BLUE,
    textAlign: 'center',
    marginLeft: normalize(24),
    paddingVertical: normalize(5),
  },
  buttonStyle: {
    marginTop: normalize(40),
    marginLeft:normalize(23),
    marginRight:normalize(10)
   
  },
  ReecivedTextStyle: {
    color: COLOR.WHITE,
    alignSelf: 'center',
    lineHeight: normalize(30),
    marginTop: normalize(30),
  },
  boxerImageStyle: {
    resizeMode: 'contain',
    width: 333,
    height: 354,
    bottom: 0,
    top: normalize(17),
    marginLeft: normalize(23),
    opacity: 0.7,
  },
  footerImageStyle: {
    height:vh(75),
    width:vw(375),
    resizeMode: 'contain',
    zIndex: 1,
    position: 'absolute',
    top: normalize(-70),
    opacity:0.6
  },
});
