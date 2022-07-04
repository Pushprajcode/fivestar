import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import COLOR from '../utils/colors';
import {normalize} from '../utils/dimension';

export default function CustomTextInput(props: any) {
  return (
    <>
    <TextInput
      {...props}
      right={null}
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
    {/* {right!==undefined?right():null} */}

    </>
    
  );
}
const styles = StyleSheet.create({
  textInput: {
    marginVertical: normalize(5),
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
  },
});
