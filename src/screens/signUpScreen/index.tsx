import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React from 'react';
import {useDispatch} from 'react-redux';
import SingUpApiCall from './action';
import {
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import * as yup from 'yup';
import COLOR from '../../utils/colors';
import STRINGS from '../../utils/strings';
import IMAGES from '../../utils/localImages';
import GoogleCustomButton from '../../components/customSocialButton';
import {DisabledButton, EnabledButton} from '../../components/customButton';
import CustomTextInput from '../../components/customTextInput';
import CustomBackButton from '../../components/customBackButton';
import {normalize, vh, vw} from '../../utils/dimension';

const SignUp = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  return (
    <Formik
      initialValues={{
        name: '',
        phoneNo: '',
        email: '',
        password: '',
        acceptTerms: false,
        hidePassword: true,
      }}
      onSubmit={(values: any, {resetForm}) => {
        Alert.alert('Successfully submitted');
        dispatch(SingUpApiCall(values));
        navigation.navigate('VerificationOtpScreen');
        resetForm();
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required(STRINGS.TEXTLABLE.FULL_NAME),
        phoneNo: yup.number().required(STRINGS.TEXTLABLE.MOBILE_NUMBER),
        email: yup.string().email().required(STRINGS.TEXTLABLE.MAIL_MESSAGE),
        password: yup
          .string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            STRINGS.TEXTLABLE.PASSWORD,
          ),
        acceptTerms: yup.boolean().equals([true], STRINGS.TEXTLABLE.TERM),
      })}>
      {({
        values,
        handleChange,
        errors,
        touched,
        handleSubmit,
        setFieldValue,
        isValid,
        handleBlur,
      }) => (
        <SafeAreaView style={styles.mainView}>
          <CustomBackButton style />
          <View style={styles.textinputView}>
            <Text style={styles.createText}>
              {STRINGS.TEXTLABLE.CREATE_ACCOUNT}
            </Text>
            <Text style={styles.getStartText}>
              {STRINGS.TEXTLABLE.SIGNUP_STARTED}
            </Text>
            <CustomTextInput
              label="Full Name*"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            {touched.name && errors.name && (
              <Text style={styles.alert}>{errors.name}</Text>
            )}
            <CustomTextInput
              label="Mobile Number*"
              value={values.phoneNo}
              onChangeText={handleChange('phoneNo')}
              onBlur={handleBlur('phoneNo')}
            />
            {touched.phoneNo && errors.phoneNo && (
              <Text style={styles.alert}>{errors.phoneNo}</Text>
            )}
            <CustomTextInput
              label="Email*"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.alert}>{errors.email}</Text>
            )}

            <CustomTextInput
              label="Password*"
              value={values.password}
              secureTextEntry={values.hidePassword ? true : false}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            <TouchableOpacity
              style={styles.eyeView}
              onPress={() => {
                setFieldValue('hidePassword', !values.hidePassword);
              }}>
              {values.hidePassword ? (
                <Image style={styles.eye} source={IMAGES.EYE_CLOSE_IMAGE} />
              ) : (
                <Image style={styles.eye} source={IMAGES.EYE_OPEN_IMAGE} />
              )}
            </TouchableOpacity>

            {touched.password && errors.password && (
              <Text style={styles.alert}>{errors.password}</Text>
            )}

            <View style={styles.checkboxView}>
              <TouchableOpacity
                onPress={() => {
                  setFieldValue('acceptTerms', !values.acceptTerms);
                }}>
                {values.acceptTerms ? (
                  <Image
                    source={require('../../assets/images/check.png')}
                    style={styles.image}
                  />
                ) : (
                  <Image source={IMAGES.CHECKBOX_IMAGE} style={styles.image} />
                )}
              </TouchableOpacity>
              {touched.acceptTerms && errors.acceptTerms && (
                <Text style={styles.alert}>{errors.acceptTerms}</Text>
              )}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Text style={styles.terms}>{STRINGS.TEXTLABLE.AGREE}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TermsScreen');
                  }}>
                  <Text style={styles.use}>{STRINGS.TEXTLABLE.TERMS_OF}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginVertical: 28}}>
              {isValid &&
              values.name != '' &&
              values.phoneNo != '' &&
              values.email != '' &&
              values.password != '' ? (
                <EnabledButton
                  label={STRINGS.TEXTLABLE.CREATE_ACCOUNT}
                  handleSubmit={handleSubmit}
                  onPress={() => {
                    navigation.navigate('VerificationOtpScreen');
                  }}
                />
              ) : (
                <DisabledButton label={STRINGS.TEXTLABLE.CREATE_ACCOUNT} />
              )}
            </View>
            <View style={styles.orView}>
              <View style={styles.orStart}></View>
              <Text style={styles.orText}>{STRINGS.TEXTLABLE.OR}</Text>
              <View style={styles.orEnd}></View>
            </View>
            <GoogleCustomButton />
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={{color: COLOR.WHITE}}>
                {STRINGS.TEXTLABLE.ALREADY_USER}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}>
                <Text style={styles.signIn}>
                  {STRINGS.TEXTLABLE.SIGN_IN_USER}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  textinputView: {
    marginHorizontal: 15,
    marginTop: 20,
    height: '100%',
    width: '94%',
  },
  createText: {
    color: COLOR.WHITE,
    fontWeight: '900',
    fontSize: 26,
    lineHeight: 24,
  },
  getStartText: {
    color: COLOR.WHITE,
    fontSize: 15,
    lineHeight: 32,
  },
  textInput: {
    marginBottom: 5,
    marginTop: 5,
  },
  alert: {
    fontSize: 12,
    color: COLOR.RED,
  },
  checkboxView: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 19,
  },
  use: {
    color: COLOR.LIGHT_BLUE,
  },
  eyeView: {
    top: normalize(18),
  },
  eye: {
    height: vh(20),
    width: vw(20),
    resizeMode: 'contain',
    position: 'absolute',
    right: 30,
    bottom: 35,
  },
  terms: {
    alignSelf: 'center',
    left: 1,
    color: COLOR.WHITE,
    fontSize: 15,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  orView: {
    alignSelf: 'center',
    marginVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  orText: {
    color: COLOR.DARK_GREY,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
  },
  orStart: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.DARK_GREY,
    width: 150,
  },
  orEnd: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.DARK_GREY,
    width: 150,
  },
  signIn: {
    color: '#44C2E3',
    left: normalize(9),
    fontSize: 14,
    fontWeight: '500',
  },
});
