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
import {useSelector} from 'react-redux';
export default function VerificationOtpScreen() {
  const navigation = useNavigation<any>();

  const pin1 = useRef<any>(null);
  const pin2 = useRef<any>(null);
  const pin3 = useRef<any>(null);
  const pin4 = useRef<any>(null);
  const [otp, setOtp] = useState('');
  const arr = [pin1, pin2, pin3, pin4];
  const [isModalVisible, setModalVisible] = useState(false);

  const Ref = useRef<any>(null);
  const onpressModal = () => {
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
              setOtp(otp => otp + text);
              pin2.current.focus();
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
        {otp.length === 4 ? (
          <EnabledButton
            label="submit"
            onPress={onpressModal}
            style={styles.buttonStyle}
          />
        ) : (
          <DisabledButton label="submit" style={styles.buttonStyle} />
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
    flex: 0.26,
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
    fontWeight: '400',
    marginHorizontal: normalize(30),
    lineHeight: normalize(16),
  },
  resendVerification: {
    color: COLOR.LIGHT_BLUE,
    alignSelf: 'center',
  },
  textInput: {
    backgroundColor: COLOR.BLACK,
    height: vh(50),
    width: vw(65),
    fontWeight: '900',
    fontSize: 30,
    borderRadius: 5,
    borderColor: COLOR.WHITE,
    borderWidth: 1,
    color: COLOR.PRIMARY_BLUE,
    textAlign: 'center',
    marginLeft: normalize(24),
  },
  buttonStyle: {
    marginTop: normalize(90),
  },
  inpView: {
    marginVertical: normalize(15),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ReecivedTextStyle: {
    color: COLOR.WHITE,
    alignSelf: 'center',
    lineHeight: normalize(30),
    marginTop: normalize(30),
  },
});
