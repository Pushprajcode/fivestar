import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLOR from '../utils/colors';

export function EnabledButton(props: any) {
  const {label, onPress, style,disabled} = props;
  return (
    <TouchableOpacity disabled={disabled}
     onPress={onPress}>
      <View style={[styles.buttonEnable,style]}>
        <Text style={styles.textSign}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function DisabledButton(props: any) {
  const {label, style} = props;

  return (
    <View style={[styles.buttonDisable, style]}>
      <Text style={styles.textSign}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonEnable: {
    width: 358,
    height: 48,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: COLOR.LIGHT_BLUE,
  },
  buttonDisable: {
    width: 358,
    height: 48,
    backgroundColor: COLOR.GREY,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,

  },
  textSign: {
    color: COLOR.BLACK,
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 15,
  },
});
