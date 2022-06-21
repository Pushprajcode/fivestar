import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
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
} from 'react-native';
import {TextInput} from 'react-native-paper';
import * as yup from 'yup';
import COLOR from '../../utils/colors';
import onGoogleButtonPress from '../../utils/googleSignIn';
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
        name: yup.string().required('Please enter FullName'),
        phoneNo: yup
          .number()
          .typeError("That doesn't look like a phone number")
          .positive("A phone number can't start with a minus")
          .integer("A phone number can't include a decimal point")
          .min(10)
          .required('A phone number is required'),
        email: yup
          .string()
          .email('Invalid email address format')
          .required('Email is required'),
        password: yup.string().min(6).required(' Password is required'),
        acceptTerms: yup.boolean().equals([true], 'terms required'),
      })}>
      {({
        values,
        handleChange,
        errors,
        touched,
        handleSubmit,
        setFieldValue,
        isValid,
      }) => (
        <View style={styles.mainView}>
          <View style={styles.createView}>
            <Text style={styles.create}>{'Create Account'}</Text>
            <Text style={styles.getStart}>{'Signup to get started'}</Text>
          </View>
          <View
            style={{
              marginHorizontal: 17,
              height: '100%',
              width: '94%',
            }}>
            <TextInput
              style={styles.textInput}
              label="Full Name*"
              value={values.name}
              mode="outlined"
              outlineColor="white"
              activeOutlineColor="white"
              onChangeText={handleChange('name')}
              theme={{
                colors: {
                  placeholder: COLOR.White,
                  text: COLOR.White,
                  primary: COLOR.Red,
                  background: COLOR.Black,
                },
              }}
            />
            {touched.name && errors.name && (
              <Text style={styles.alert}>{errors.name}</Text>
            )}
            <TextInput
              style={styles.textInput}
              label="Mobile Number*"
              value={values.phoneNo}
              mode="outlined"
              outlineColor="white"
              activeOutlineColor="white"
              onChangeText={handleChange('phoneNo')}
              theme={{
                colors: {
                  placeholder: 'white',
                  text: 'white',
                  primary: 'red',
                  background: 'black',
                },
              }}
            />
            {touched.phoneNo && errors.phoneNo && (
              <Text style={styles.alert}>{errors.phoneNo}</Text>
            )}
            <TextInput
              style={styles.textInput}
              label="Email*"
              value={values.email}
              mode="outlined"
              outlineColor="white"
              activeOutlineColor="white"
              onChangeText={handleChange('email')}
              theme={{
                colors: {
                  placeholder: 'white',
                  text: 'white',
                  primary: 'red',
                  background: 'black',
                },
              }}
            />
            {touched.email && errors.email && (
              <Text style={styles.alert}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.textInput}
              label="Password*"
              value={values.password}
              mode="outlined"
              outlineColor="white"
              activeOutlineColor="white"
              secureTextEntry={values.hidePassword ? true : false}
              onChangeText={handleChange('password')}
              theme={{
                colors: {
                  placeholder: 'white',
                  text: 'white',
                  primary: 'red',
                  background: 'black',
                },
              }}
            />
            <View>
              <TouchableOpacity
                style={{top: 12}}
                onPress={() => {
                  setFieldValue('hidePassword', !values.hidePassword);
                }}>
                {values.hidePassword ? (
                  <Image
                    style={styles.eye}
                    source={require('../../assets/images/eye.png')}
                  />
                ) : (
                  <Image
                    style={styles.eye}
                    source={require('../../assets/images/Vector.png')}
                  />
                )}
              </TouchableOpacity>
            </View>

            {touched.password && errors.password && (
              <Text style={styles.alert}>{errors.password}</Text>
            )}

            <View style={styles.checkbox}>
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
                  <Image
                    source={require('../../assets/images/oval.png')}
                    style={styles.image}
                  />
                )}
              </TouchableOpacity>
              {touched.acceptTerms && errors.acceptTerms && (
                <Text style={styles.alert}>{errors.acceptTerms}</Text>
              )}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Text style={styles.terms}>{'I agree to the '}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignUp'),
                      navigation.navigate('TermsScreen');
                  }}>
                  <Text style={styles.use}>{'Terms of Use* '}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginVertical: 9}}>
              <TouchableOpacity
                style={isValid ? styles.buttonUpdate : styles.button}
                disabled={!isValid}
                onPress={handleSubmit}>
                <Text style={styles.text}>{'CREATE ACCOUNT'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.orView}>
              <View style={styles.orStart}></View>
              <Text style={styles.orText}>{'OR'}</Text>
              <View style={styles.orEnd}></View>
            </View>
            <TouchableOpacity
              style={styles.google}
              onPress={() => {
                onGoogleButtonPress();
              }}>
              <Image
                style={styles.googleImage}
                source={require('../../assets/images/google.png')}
              />
              <Text style={styles.naming}>{'Continue with Google'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.google}
              onPress={() => {
                axios({
                  method: 'post',
                  url: 'https://fivestardevapi.appskeeper.in/api/v1/user/verify-only-otp',
                  data: {
                    userId: '62a189d0149d0b7ee8dcfa0d',
                    otp: '1234',
                    countryCode: '+1',
                    phoneNo: '9919898006',
                  },
                })
                  .then(response => {
                    console.log('response OTP', response);
                  })
                  .catch(err => {
                    console.log('error', err);
                  });
              }}>
              <Image
                style={styles.googleImage}
                source={require('../../assets/images/apple.png')}
              />
              <Text style={styles.naming}>{'Continue with Apple'}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{color: 'white '}}>{"I'm a new user "}</Text>
            <Text>{'Sign In'}</Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.Black,
  },
  createView: {
    marginTop: 70,
    marginHorizontal: 24,
  },
  create: {
    color:COLOR.White,
    fontWeight: '900',
    fontSize: 26,
    fontStyle:'italic',
    lineHeight:24,
  },
  getStart: {
    color: COLOR.White,
    fontSize: 15,
    lineHeight: 32,
  },
  textInput: {
    marginBottom: 5,
    marginTop: 5,
  },
  alert: {
    fontSize: 12,
    color: '#FF6258',
    padding: 0,
  },
  button: {
    height: 45,
    width: '100%',
    backgroundColor: '#282828',
    alignSelf: 'center',
  },
  buttonUpdate: {
    height: 45,
    width: '100%',

    backgroundColor: '#44C2E3',
    alignSelf: 'center',
  },

  text: {
    color: '#595959',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    top: 7,
    fontStyle: 'italic',
  },
  checkbox: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 5,
  },
  use: {
    color: '#44C2E3',
  },
  eye: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
    position: 'absolute',
    right: 30,
    bottom: 35,
  },

  terms: {
    alignSelf: 'center',
    left: 1,
    color: COLOR.White,
    fontSize: 15,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  orView: {
    alignSelf: 'center',
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  orText: {
    color: '#595959',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
  },
  orStart: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: 150,
  },
  orEnd: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: 150,
  },
  google: {
    backgroundColor: COLOR.White,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  googleImage: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  naming: {
    fontSize: 18,
  },
});