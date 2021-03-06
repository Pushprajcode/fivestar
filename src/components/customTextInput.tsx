import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import COLOR from '../utils/colors';
import {normalize, vh, vw} from '../utils/dimension';

export default function CustomTextInput(props: any) {
  const {value, style, onChangeText} = props;
  return (
    <TextInput
      {...props}
      value={value}
      right={null}
      dense={true}
      style={[styles.textInput, style]}
      mode="outlined"
      outlineColor={COLOR.WHITE}
      onChangeText={onChangeText}
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
    width: vw(350),
    height: vh(48),
    borderRadius: normalize(5),
    marginVertical: normalize(5),
    lineHeight:normalize(24),
    fontSize: normalize(14),
    fontWeight: '500',
  },
});
