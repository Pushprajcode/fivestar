import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLOR from '../utils/colors';

export function EnabledButton(props: any) {
  const {label, onPress} = props;
  //console.log('lablemekya ayaa', props);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonEnable}>
        <Text style={styles.textSign}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function DisabledButton(props: any) {
  const {label} = props;
  return (
    <View style={styles.buttonDisable}>
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
    top: 20,
    backgroundColor: COLOR.PRIMARY_BLUE,
  },
  buttonDisable: {
    width: 358,
    height: 48,
    backgroundColor: COLOR.GREY,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: 20,
  },
  textSign: {
    color: COLOR.LIGHT_GREY,
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 15,
  },
});
