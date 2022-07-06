import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import COLOR from '../utils/colors';
import {normalize, vh, vw} from '../utils/dimension';

export default function CustomTextInput(props: any) {
  const {value, style} = props;
  return (
    <TextInput
      {...props}
      value={value}
      right={null}
      dense={true}
      style={[styles.textInput, style]}
      mode="outlined"
      outlineColor={COLOR.WHITE}
      activeOutlineColor={COLOR.WHITE}
      theme={{
        colors: {
          placeholder: COLOR.WHITE,
          text: COLOR.PRIMARY_BLUE,
          background: COLOR.BLACK,
        },
      }}
    />
  );
}
const styles = StyleSheet.create({
  textInput: {
    marginVertical: normalize(5),
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    height: vh(48),
    width: vw(327),
    borderRadius: normalize(5),
  },
});
