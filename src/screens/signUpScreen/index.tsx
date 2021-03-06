import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import SingUpApiCall from './action';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
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
import ROUTE_NAMES from '../../router/routeNames';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const termfun=()=>{
    navigation.navigate(ROUTE_NAMES.TERM_CONDITIONS)
  }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        countryCode: '+1',
        phoneNo: '',
        acceptTerms: false,
        hidePassword: true,
      }}
      onSubmit={(values: any, {resetForm}) => {
        // resetForm();
        setLoading(true);
        dispatch(
          SingUpApiCall(values, (resp: any) => {
            if (resp.status == 200) {
              navigation.navigate('VerificationOtpScreen');
              setLoading(false);
            } else {
              setLoading(false);
            }
          }),
        );
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required(STRINGS.TEXTLABLE.FULL_NAME),
        email: yup.string().email().required(STRINGS.TEXTLABLE.MAIL_MESSAGE),
        phoneNo: yup.number().required(STRINGS.TEXTLABLE.MOBILE_NUMBER),
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
          <CustomBackButton />
          <View style={styles.createTextStyle}>
            <Text style={styles.createText}>
              {STRINGS.TEXTLABLE.CREATE_ACCOUNT}
            </Text>
            <Text style={styles.getStartText}>
              {STRINGS.TEXTLABLE.SIGNUP_STARTED}
            </Text>
          </View>
          <ScrollView>
            <View style={styles.textinputView}>
              <CustomTextInput
                label={STRINGS.LABEL.FULL_NAME}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              {touched.name && errors.name && (
                <Text style={styles.alert}>{errors.name}</Text>
              )}
              <CustomTextInput
                label={STRINGS.LABEL.PHONE_NUMBER}
                value={values.phoneNo}
                onChangeText={handleChange('phoneNo')}
                onBlur={handleBlur('phoneNo')}
                maxLength={10}
                keyboardType="numeric"
              />
              {touched.phoneNo && errors.phoneNo && (
                <Text style={styles.alert}>{errors.phoneNo}</Text>
              )}
              <CustomTextInput
                label={STRINGS.LABEL.EMAIL}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.alert}>{errors.email}</Text>
              )}
              <View>
                <CustomTextInput
                  label={STRINGS.LABEL.PASSWORD}
                  value={values.password}
                  secureTextEntry={values.hidePassword ? true : false}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  style={styles.passtxtinput}
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
                  <Text style={styles.alertPassword}>{errors.password}</Text>
                )}
              </View>
            </View>
            <View style={styles.checkboxView}>
              <TouchableOpacity
                onPress={() => {
                  setFieldValue('acceptTerms', !values.acceptTerms);
                }}>
                {values.acceptTerms ? (
                  <Image source={IMAGES.CHECKBOX_ENABLE} style={styles.image} />
                ) : (
                  <Image source={IMAGES.CHECKBOX_IMAGE} style={styles.image} />
                )}
              </TouchableOpacity>
              {touched.acceptTerms && errors.acceptTerms && (
                <Text style={styles.alert}>{errors.acceptTerms}</Text>
              )}
              <View style={styles.termsView}>
                <TouchableOpacity>
                  <Text style={styles.terms}>{STRINGS.TEXTLABLE.AGREE}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(ROUTE_NAMES.TERM_CONDITIONS);
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
                  onPress={handleSubmit}
                />
              ) : (
                <DisabledButton
                  style={{marginRight: 14}}
                  label={STRINGS.TEXTLABLE.CREATE_ACCOUNT}
                />
              )}
            </View>
            <View style={styles.orView}>
              <View style={styles.orStart}></View>
              <Text style={styles.orText}>{STRINGS.TEXTLABLE.OR}</Text>
              <View style={styles.orEnd}></View>
            </View>
            <GoogleCustomButton />
            <View style={styles.alreadyView}>
              <Text style={{color: COLOR.WHITE}}>
                {STRINGS.TEXTLABLE.ALREADY_USER}
              </Text>
              <TouchableOpacity
                onPress={termfun}>
                <Text style={styles.signIn}>
                  {STRINGS.TEXTLABLE.SIGN_IN_USER}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {loading && (
            <ActivityIndicator size={'large'}
             color={COLOR.PRIMARY_BLUE} />
          )}
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
  createTextStyle: {
    marginLeft: normalize(18),
    marginTop: normalize(15),
  },
  textinputView: {
    marginHorizontal: normalize(20),
    marginTop: normalize(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  createText: {
    color: COLOR.WHITE,
    fontWeight: '900',
    fontSize: 26,
    lineHeight: 24,
    fontStyle: 'italic',
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
    color: COLOR.RED,
    fontSize: 12,
    height: normalize(15),
    maxWidth: normalize(289),
    bottom: normalize(4),
    width: normalize(300),
    right: normalize(29),
  },
  alertPassword: {
    color: COLOR.RED,
    fontSize: 12,
    bottom: normalize(4),
  },
  checkboxView: {
    flexDirection: 'row',
    marginHorizontal: normalize(13),
    marginTop: 19,
  },
  use: {
    color: COLOR.LIGHT_BLUE,
  },
  eyeView: {
    justifyContent: 'flex-end',
  },
  eye: {
    height: vh(20),
    width: vw(20),
    resizeMode: 'contain',
    position: 'absolute',
    right: 20,
    bottom: normalize(17),
  },
  termsView: {
    flexDirection: 'row',
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
    marginHorizontal: normalize(20),
    alignItems: 'center',
    flexDirection: 'row',
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
    width: normalize(150),
    marginLeft: normalize(2),
  },
  orEnd: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.DARK_GREY,
    width: normalize(175),
  },
  alreadyView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: normalize(30),
  },
  signIn: {
    color:COLOR.PRIMARY_BLUE,
    left: normalize(9),
    fontSize: 14,
    fontWeight: '900',
    fontStyle:'italic'
  },
  passtxtinput:{
    paddingRight:30
  }
});
