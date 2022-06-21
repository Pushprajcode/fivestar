import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import COLOR from '../utils/colors';
export default function OtpInput(props: any) {
  const {callBack} = props;
  return (
    <TextInput
      maxLength={1}
      keyboardType="numeric"
      style={styles.OtpBoxStyl}
      onChangeText={text => {
        callBack(text);
      }}
    />
  );
}
const styles = StyleSheet.create({
  OtpBoxStyl: {
    backgroundColor: COLOR.WHITE,
    height: 48,
    width: 64,
    paddingHorizontal: 25,
    fontSize: 20,
    borderRadius: 5,
  },
});
