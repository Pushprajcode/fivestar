import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import onGoogleButtonPress from '../utils/googleSignIn';
import IMAGES from '../utils/localImages';
import STRINGS from '../utils/strings';
import COLOR from '../utils/colors';
import {normalize} from '../utils/dimension';

export default function CustomSocialButton() {
  return (
    <View style={styles.socialButtonView}>
      <TouchableOpacity
        onPress={() => onGoogleButtonPress()}
        style={styles.google}>
        <Image
          style={styles.CommonSocialLoginImageStyle}
          source={IMAGES.GOOGLE_IMAGE}
        />
        <Text style={styles.naming}>
          {STRINGS.TEXTLABLE.GOOGLE_BUTTON_TEXT}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.google}>
        <Image
          style={styles.CommonSocialLoginImageStyle}
          source={IMAGES.APPLE_IMAGE}
        />
        <Text style={styles.naming}>{STRINGS.TEXTLABLE.APPLE_BUTTON_TEXT}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  socialButtonView: {
    marginTop: 19,
    marginHorizontal: normalize(12),
  },
  google: {
    backgroundColor: COLOR.WHITE,
    margin: 20,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    borderRadius: 5,
    width: '100%',
    right: 19,
  },
  CommonSocialLoginImageStyle: {
    height: 20,
    width: 20,
  },
  naming: {
    fontSize: 18,
  },
});
