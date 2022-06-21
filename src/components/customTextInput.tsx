import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import COLOR from '../utils/colors';

export default function CustomTextInput(props: any) {
  return (
    <TextInput
      {...props}
      dense={true}
      style={styles.textInput}
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
    marginBottom: 5,
    marginTop: 5,
  },
});
