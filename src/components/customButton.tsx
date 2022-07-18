import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLOR from '../utils/colors';
import {normalize, vh, vw} from '../utils/dimension';

export function EnabledButton(props: any) {
  const {label, onPress, style} = props;
  return (
    <TouchableOpacity style={[styles.buttonEnable, style]} onPress={onPress}>
      <View>
        <Text style={styles.enabletextSign}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function DisabledButton(props: any) {
  const {label, style} = props;

  return (
    <View style={[styles.buttonDisable, style]}>
      <Text style={styles.disabletextSign}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonEnable: {
    width: vw(350),
    height: vh(48),
    marginLeft: normalize(10),
    borderRadius: normalize(5),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.LIGHT_BLUE,
  },
  buttonDisable: {
    width: normalize(350),
    height: normalize(48),
    marginLeft: normalize(10),
    borderRadius: normalize(5),
    backgroundColor: COLOR.GREY,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  disabletextSign: {
    lineHeight: normalize(17),
    fontSize: normalize(16),
    fontWeight: '900',
    alignSelf: 'center',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    color: COLOR.DARK_GREY,
  },
  enabletextSign: {
    fontSize: normalize(16),
    lineHeight: normalize(17),
    fontWeight: '900',
    alignSelf: 'center',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    color: COLOR.BLACK,
  },
});
