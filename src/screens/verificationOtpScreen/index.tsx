import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomBackButton from '../../components/customBackButton';
import ModalScreen from '../../components/modal';
import {DisabledButton, EnabledButton} from '../../components/customButton';
import COLOR from '../../utils/colors';
import STRINGS from '../../utils/strings';
import {normalize, vh, vw} from '../../utils/dimension';
import {useDispatch, useSelector} from 'react-redux';
import OtpAction from './action';
import IMAGES from '../../utils/localImages';
import ROUTE_NAMES from '../../router/routeNames';

export default function VerificationOtpScreen() {
  const [counter, setCounter] = useState(70);
  const [isModalVisible, setModalVisible] = useState(false);
  const {countryCode, phoneNo, userId} = useSelector(
    (store: any) => store.signUpReducer,
  );
  const navigation = useNavigation<any>();

  const pin1 = useRef<any>(null);
  const pin2 = useRef<any>(null);
  const pin3 = useRef<any>(null);
  const pin4 = useRef<any>(null);
  const [otp, setOtp] = useState('');

  const dispatch: Function = useDispatch();

  const onpressModal = () => {
    console.log('Inside onpress modal');
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((lastTimerCount: number) => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  const returnTimerValue = (time: any) => {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    return `${minutes}${':'}${
      seconds <= 9 && seconds >= 0 ? '0' + seconds : seconds
    }`;
  };

  return (
    <SafeAreaView style={styles.safeAreastyle}>
      <View>
        <CustomBackButton style={styles.backImageStyle} />
        {/* modal called  */}
        {isModalVisible && <ModalScreen />}
        <Text style={styles.enterVerification}>
          {STRINGS.TEXTLABLE.ENTER_VERIFICATION}
        </Text>
        <Text style={styles.digitVerification}>
          {STRINGS.TEXTLABLE.CODE_SENT}
        </Text>
        <View style={styles.phoneView}>
          <Text style={styles.phoneText}>{phoneNo}</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>{STRINGS.TEXTLABLE.EDIT}</Text>
          </TouchableOpacity>
        </View>

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
            label={STRINGS.TEXTLABLE.SUBMIT}
            onPress={() => {
              dispatch(
                OtpAction(
                  userId,
                  otp,
                  countryCode,
                  phoneNo,
                  (data: any) => {
                    if (data.data.statusCode == 200) {
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
          <DisabledButton
            label={STRINGS.TEXTLABLE.SUBMIT}
            style={styles.buttonStyle}
          />
        )}
        <View style={styles.OtpTimerStyle}>
          {counter > 1 ? (
            <>
              <Image style={styles.clockImageStyle} source={IMAGES.TIMER_PIC} />
              <Text style={styles.TextStyle}>
                {counter > 1 && returnTimerValue(counter)}
              </Text>
            </>
          ) : null}
        </View>
        <Text style={styles.ReecivedTextStyle}>
          {STRINGS.TEXTLABLE.RECIEVED}
        </Text>
        {
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTE_NAMES.FAN_ATHLETE);
            }}>
            {counter == 0 ? (
              <Text style={styles.resendVerification}>
                {STRINGS.TEXTLABLE.RESEND_VERIFICATION}
              </Text>
            ) : null}
          </TouchableOpacity>
        }
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
    backgroundColor: COLOR.BLACK,
  },
  backImageStyle: {
    marginLeft: normalize(25),
  },
  backImage: {
    height: vh(20),
    width: vw(12),
  },
  otpViewStyle: {
    flexDirection: 'row',
    marginTop: normalize(34),
  },
  enterVerification: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: normalize(24),
    fontStyle: 'italic',
  },
  digitVerification: {
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: normalize(30),
    lineHeight: normalize(16),
    color: COLOR.WHITE,
  },
  phoneView: {
    flexDirection: 'row',
  },
  phoneText: {
    top: normalize(10),
    left: normalize(27),
    color: COLOR.WHITE,
  },
  editText: {color: COLOR.LIGHT_BLUE, left: 40, lineHeight: 35},
  resendVerification: {
    fontWeight: '900',
    fontSize: normalize(14),
    fontStyle: 'italic',
    alignSelf: 'center',
    color: COLOR.LIGHT_BLUE,
  },
  textInput: {
    height: vh(48),
    width: vw(64),
    fontWeight: '900',
    fontSize: 30,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: normalize(24),
    paddingVertical: normalize(5),
    textAlign: 'center',
    borderColor: COLOR.WHITE,
    backgroundColor: COLOR.BLACK,
    color: COLOR.PRIMARY_BLUE,
  },
  buttonStyle: {
    marginTop: normalize(40),
    height: normalize(48),
    width: normalize(330),
  },
  ReecivedTextStyle: {
    lineHeight: normalize(30),
    marginTop: normalize(30),
    alignSelf: 'center',
    color: COLOR.WHITE,
  },
  boxerImageStyle: {
    width: 333,
    height: 354,
    bottom: 0,
    top: normalize(17),
    marginLeft: normalize(23),
    opacity: 0.7,
    resizeMode: 'contain',
  },
  footerImageStyle: {
    height: vh(75),
    width: vw(375),
    zIndex: 1,
    top: normalize(-70),
    opacity: 0.6,
    resizeMode: 'contain',
    position: 'absolute',
  },
  OtpTimerStyle: {
    marginTop: normalize(30),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  clockImageStyle: {
    height: vh(20),
    width: vw(20),
  },
  TextStyle: {
    color: COLOR.WHITE,
    marginLeft: normalize(20),
  },
});
