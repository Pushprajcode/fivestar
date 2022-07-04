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
import {vh, vw} from '../../utils/dimension';

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
        Alert.alert('Successfully submitted');
        console.log({values});
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
        <View style={styles.mainView}>
          <Text style={styles.using}>{STRINGS.TEXTLABLE.SIGN_UP_USING}</Text>

          <View style={styles.textView}>
            <CustomTextInput
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <Text style={styles.alert}>
              {touched.email && errors.email && errors.email}
            </Text>

            <View style={styles.passwordVeiw}>
              <CustomTextInput
                label={'Password'}
                value={values.password}
                secureTextEntry={values.hidePassword ? true : false}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              <TouchableOpacity
                onPress={() => {
                  setFieldValue('hidePassword', !values.hidePassword);
                }}>
                {values.hidePassword ? (
                  <Image
                    style={styles.eyeClose}
                    source={IMAGES.EYE_CLOSE_IMAGE}
                  />
                ) : (
                  <Image
                    style={styles.eyeOpen}
                    source={IMAGES.EYE_OPEN_IMAGE}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.alert}>
              {touched.password && errors.password && errors.password}
            </Text>
            <TouchableOpacity>
              <Text style={styles.forget}>
                {STRINGS.TEXTLABLE.FOGET_PASSWORD}
              </Text>
            </TouchableOpacity>
            {isValid && values.email != '' && values.password != '' ? (
              <EnabledButton
                label={STRINGS.TEXTLABLE.SIGN_IN}
                onPress={() => Alert.alert('signed in')}
              />
            ) : (
              <DisabledButton label={STRINGS.TEXTLABLE.SIGN_UP} />
            )}
            <View style={styles.orView}>
              <View style={styles.orStart}></View>
              <Text style={styles.orText}>{STRINGS.TEXTLABLE.OR}</Text>
              <View style={styles.orEnd}></View>
            </View>
            <GoogleCustomButton />
            <View style={styles.newUser}>
              <Text style={styles.new}>{STRINGS.TEXTLABLE.NEW_USER}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text style={styles.signUp}>{STRINGS.TEXTLABLE.SIGN_UP}</Text>
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
    backgroundColor: COLOR.BLACK,
    paddingHorizontal: 20,
  },
  textView: {
    marginTop: 110,
    width: '100%',
  },
  using: {
    color: COLOR.WHITE,
    fontWeight: '400',
    fontSize: 24,
    fontStyle: 'normal',
    fontFamily: 'HelveticaNeue-CondensedBold',
    top: 100,
    width: vw(281),
    height: vh(80),
  },
  passwordVeiw: {
    justifyContent: 'space-between',
  },
  forget: {
    color: COLOR.LIGHT_BLUE,
    alignSelf: 'flex-end',
  },
  eyeClose: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    right: 28,
    bottom: 16,
  },
  eyeOpen: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    right: 28,
    bottom: 16,
  },
  alert: {
    fontSize: 12,
    color: COLOR.RED,
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
    width: 150,
  },
  orEnd: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.LIGHT_GREY,
    width: 150,
  },
  naming: {
    fontSize: 18,
  },
  newUser: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  new: {color: COLOR.WHITE, fontSize: 14, fontWeight: '500'},
  signUp: {
    color: COLOR.PRIMARY_BLUE,
    left: 9,
    fontSize: 14,
    fontWeight: '500',
  },
});
