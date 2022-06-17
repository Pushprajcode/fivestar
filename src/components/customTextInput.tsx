import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
export default function CustomTextInput(props: any) {
  return (
    <TextInput
      {...props}
      style={styles.textInput}
      mode="outlined"
      outlineColor="white"
      activeOutlineColor=""
      theme={{
        colors: {
          placeholder: '#FFFFFF',
          text: '#FFFFFFF',
          primary: '#FF0000',
          background: 'black',
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 19,
    marginHorizontal: 20,
  },
});
