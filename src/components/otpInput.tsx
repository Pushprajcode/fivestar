import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
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
    backgroundColor: 'white',
    height: 48,
    width: 64,
    paddingHorizontal: 25,
    fontSize: 20,
    borderRadius: 5,
  },
});
