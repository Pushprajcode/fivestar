import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import GoogleCustomButton from '../../components/customSocialButton';
import CustomTextInput from '../../components/customTextInput';
import {DisabledButton, EnabledButton} from '../../components/customButton';
import STRINGS from '../../utils/strings';
import IMAGES from '../../utils/localImages';
import COLOR from '../../utils/colors';
import {normalize, vh, vw} from '../../utils/dimension';
import CustomBackButton from '../../components/customBackButton';
import {SafeAreaView} from 'react-native-safe-area-context';

function LoginScreen() {
  const navigation = useNavigation<any>();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        hidePassword: true,
        phoneNo: '',
      }}
      onSubmit={(values, {resetForm}) => {
        Alert.alert(STRINGS.TEXTLABLE.SIGNUP_ALERT);
        resetForm();
      }}
      validationSchema={yup.object().shape({
        email: yup.string().email(STRINGS.TEXTLABLE.MAIL_MESSAGE),

        password: yup
          .string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            STRINGS.TEXTLABLE.PASSWORD,
          ),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
        setFieldValue,
        isValid,
        handleBlur,
      }) => (
        <SafeAreaView style={styles.mainView}>
          <CustomBackButton />
          <View style={styles.emailTextView}>
            <Text style={styles.using}>{STRINGS.TEXTLABLE.SIGN_UP_USING}</Text>
          </View>
          <View style={styles.textView}>
            <CustomTextInput
              label={STRINGS.TEXTLABLE.EMAIL}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <Text style={styles.alert}>
              {touched.email && errors.email && errors.email}
            </Text>
           <View>
            <CustomTextInput
              label={STRINGS.TEXTLABLE.PASSWORD_LEVEL}
              value={values.password}
              secureTextEntry={values.hidePassword ? true : false}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            <TouchableOpacity
            style={styles.eyeView}
              onPress={() => {
                setFieldValue('hidePassword', !values.hidePassword);
              }}>
              {values.hidePassword ? (
                <Image
                  style={styles.eyeClose}
                  source={IMAGES.EYE_CLOSE_IMAGE}
                />
              ) : (
                <Image style={styles.eyeOpen} source={IMAGES.EYE_OPEN_IMAGE} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.alert}>
            {touched.password && errors.password && errors.password}
          </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forget}>
              {STRINGS.TEXTLABLE.FOGET_PASSWORD}
            </Text>
          </TouchableOpacity>
          {isValid && values.email != '' && values.password != '' ? (
            <EnabledButton
              style={styles.buttonStyle}
              label={STRINGS.TEXTLABLE.SIGN_IN}
              onPress={() => Alert.alert('signed in')}
            />
          ) : (
            <DisabledButton
              style={styles.buttonStyle}
              label={STRINGS.TEXTLABLE.SIGN_UP}
            />
          )}
          <View style={styles.orView}>
            <View style={styles.orStart} />
            <Text style={styles.orText}>{STRINGS.TEXTLABLE.OR}</Text>
            <View style={styles.orEnd}></View>
          </View>

          <GoogleCustomButton  style={styles.socialButtonStyle}/>

          <View style={styles.newUser}>
            <Text style={styles.new}>{STRINGS.TEXTLABLE.NEW_USER}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={styles.signUp}>{STRINGS.TEXTLABLE.SIGN_UP}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
}
export default LoginScreen;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  emailTextView: {
    marginLeft: normalize(18),
    marginTop: normalize(19),
  },
  textView: {
    marginHorizontal: normalize(15),
    marginTop: normalize(16),
    justifyContent: 'center',
  },
  using: {
    color: COLOR.WHITE,
    fontWeight: '900',
    fontSize: 24,
    lineHeight: 24,
    fontStyle:'italic'
  },
  passwordVeiw: {
    justifyContent: 'space-between',
  },
  forget: {
    color: COLOR.LIGHT_BLUE,
    alignSelf: 'flex-end',
    marginRight: normalize(10),
  },
  eyeView:{
    height: normalize(20),
    width: normalize(20),
    zIndex:2,
    position: 'absolute',
    right: normalize(12),
     bottom: normalize(18),
},
  eyeClose: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
  eyeOpen: {
    height: normalize(20),
    width: normalize(20),
   resizeMode: 'contain',

  },
  alert: {
    fontSize: 12,
    color: COLOR.RED,
  },
  buttonStyle: {
    marginTop: normalize(40),
  },
  orView: {
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  orText: {
    color: COLOR.LIGHT_GREY,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  orStart: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.LIGHT_GREY,
    width: vw(166),
    left:normalize(8)
  },
  orEnd: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.LIGHT_GREY,
    width: 166,
    left:normalize(3)
  },
  naming: {
    fontSize: 18,
  },
  newUser: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop:normalize(20),
  },
  socialButtonStyle:{
    marginLeft:normalize(32)
  },
  new: {color: COLOR.WHITE, fontSize: 14, fontWeight: '500'},
  signUp: {
    color: COLOR.PRIMARY_BLUE,
    left: 9,
    fontSize: 14,
    fontWeight: '500',
    fontStyle:'italic'
  },
});
