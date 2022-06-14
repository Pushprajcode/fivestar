import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import onGoogleButtonPress from '../../utils/googleSignIn';
function LoginScreen(): any {
  const navigation = useNavigation<any>();
  interface values {
    email: string;
    password: string;
    hidePassword: boolean;
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        hidePassword: true,
        phoneNo: '',
      }}
      onSubmit={(values, {resetForm}) => {
        //Alert.alert('Successfully submitted');
        console.log({values});
        axios({
          method: 'post',
          url: 'https://fivestardevapi.appskeeper.in/api/v1/user/login',
          data: {
            email: values.email,
            password: values.password,
            countryCode: '+1',
            phoneNo: '',
          },
        })
          .then(resp => {
            console.log('responsedata', resp);
          })
          .catch(err => {
            console.log('error', err);
          });
        resetForm();
      }}
      validationSchema={yup.object().shape({
        email:
          yup
            .string()
            .email('Invalid email address format')
            .required('Email is required') ||
          yup.object({
            phone: yup
              .string()
              .required('This field is Required')
              .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                'Phone number is not valid',
              ),
          }),
        password: yup.string().min(6).max(10).required(' Password is required'),
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
      }) => (
        <View style={styles.mainView}>
          <View>
            <Text style={styles.using}>
              {'Sign In Using Your\nMobile Number / Email'}
            </Text>
          </View>
          <View style={styles.textView}>
            <TextInput
              style={styles.textInput}
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="Mobile Number / Email"
              onBlur={() => setFieldTouched('email')}
              placeholderTextColor={'#ffffff'}
            />
            <Text style={styles.alert}>
              {touched.email && errors.email && errors.email}
            </Text>

            <View style={styles.passwordVeiw}>
              <TextInput
                style={styles.passwordText}
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
                placeholderTextColor={'#ffffff'}
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={values.hidePassword ? true : false}
              />
              <TouchableOpacity
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
                    style={styles.eyeNew}
                    source={require('../../assets/images/Vector.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.alert}>
              {touched.password && errors.password && errors.password}
            </Text>
            <TouchableOpacity>
              <Text style={styles.forget}>{'Forget Password?'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!isValid}
              style={isValid ? styles.button : styles.buttonUpdate}
              onPress={handleSubmit}>
              <Text style={styles.textSign}>{'SIGN IN'}</Text>
            </TouchableOpacity>
            <View style={styles.orView}>
              <View style={styles.orStart}></View>
              <Text style={styles.orText}>{'OR'}</Text>
              <View style={styles.orEnd}></View>
            </View>
            <TouchableOpacity onPress={()=>onGoogleButtonPress()} style={styles.google}>
              <Image
                style={styles.googleImage}
                source={require('../../assets/images/google.png')}
              />
              <Text style={styles.naming}>{'Continue with Google'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.google}>
              <Image
                style={styles.googleImage}
                source={require('../../assets/images/apple.png')}
              />
              <Text style={styles.naming}>{'Continue with Apple'}</Text>
            </TouchableOpacity>

            <View style={styles.newUser}>
              <Text style={styles.new}>{"I'm a new user"}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text style={styles.signUp}>{'Sign Up'}</Text>
              </TouchableOpacity>
             
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}
export default LoginScreen;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
  },
  textView: {
    marginTop: 130,
    width: '100%',
  },
  using: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 24,
    // lineHeight: 35,
    fontStyle: 'normal',
    fontFamily: 'HelveticaNeue-CondensedBold',
    // width: 278,
    top: 100,
    // left: 24,
  },
  textInput: {
    margin: 10,
    height: 48,
    // width: 327,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    color: '#44C2E3',
    // left: 17,
    padding: 16,
    paddingTop: 12,
    paddingBottom: 12,
    //fontWeight:'900'
  },
  passwordVeiw: {
    flexDirection: 'row',
    borderColor: '#ffffff',
    borderWidth: 1,
    width: 327,
    alignItems: 'center',
    height: 48,
    borderRadius: 5,
    alignSelf: 'center',
    // marginLeft: 30,
  },
  passwordText: {
    marginLeft: 0,
    // left: 0,
    width: 280,
    borderWidth: 0,
    margin: 10,
    height: 48,

    borderRadius: 5,

    borderColor: '#FFFFFF',
    color: '#44C2E3',

    padding: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  forget: {
    color: '#44C2E3',
    alignSelf: 'flex-end',
  },
  eye: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  eyeNew: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  button: {
    width: 328,
    height: 48,
    backgroundColor: '#44C2E3',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: 20,
    // left: 18,
  },
  buttonUpdate: {
    width: 328,
    height: 48,
    backgroundColor: '#282828',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: 20,
  },
  textSign: {
    color: '#595959',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  alert: {
    fontSize: 12,
    color: 'red',
    //left: 22,
  },
  orView: {
    alignSelf: 'center',
    marginVertical: 50,
    alignItems: 'center',
    flexDirection: 'row',
    // left: 13,
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
  googleTouch: {
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 200,
    borderRadius: 30,
    borderColor: '#55c56d',
  },
  google: {
    height: 48,
    width: 325,
    backgroundColor: 'white',
    margin: 20,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    borderRadius: 5,
    // left: 12,
  },
  googleImage: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  naming: {
    fontSize: 18,
  },
  newUser: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  new: {color: 'white', fontSize: 14, fontWeight: '500'},
  signUp: {
    color: '#44C2E3',
    left: 9,
    fontSize: 14,
    fontWeight: '500',
  },
  signUpUpdate: {
    color: 'red',
    left: 9,
    fontSize: 14,
    fontWeight: '500',
  },
});
