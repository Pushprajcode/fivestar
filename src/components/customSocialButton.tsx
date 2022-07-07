import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import onGoogleButtonPress from '../utils/googleSignIn';
import IMAGES from '../utils/localImages';
import STRINGS from '../utils/strings';
import COLOR from '../utils/colors';
import {normalize, vh, vw} from '../utils/dimension';

export default function CustomSocialButton(props:any) {
  const{style}=props
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => onGoogleButtonPress()}
        style={[styles.google,style]}>
        <Image
          style={styles.CommonSocialLoginImageStyle}
          source={IMAGES.GOOGLE_IMAGE}
        />
        <Text style={styles.naming}>
          {STRINGS.TEXTLABLE.GOOGLE_BUTTON_TEXT}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.google,style]}>
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
  google: {
    backgroundColor: COLOR.WHITE,

    marginHorizontal: normalize(20),
    flexDirection: 'row',

    justifyContent: 'center',
    borderRadius: normalize(5),
    height: normalize(48),
    marginTop: normalize(32),
    borderWidth: 1,
    width: normalize(350),
  },
  CommonSocialLoginImageStyle: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  naming: {
    fontSize: 16,
    alignSelf: 'center',
    marginLeft: normalize(8),
    lineHeight: normalize(24),
  },
});
