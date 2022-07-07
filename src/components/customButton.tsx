import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLOR from '../utils/colors';
import { normalize, vh, vw } from '../utils/dimension';

export function EnabledButton(props: any) {
  const {label, onPress, style,handleSubmit} = props;
  return (
    <TouchableOpacity 
    style={[styles.buttonEnable,style]}
    // style={{borderWidth: 2,borderColor: 'yellow',marginTop: 'auto',}}
     onPress={onPress}>
      <View >
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
    width:vw(350),
    height:vh(48),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
    backgroundColor: COLOR.LIGHT_BLUE,
   
    marginLeft:10
  },
  buttonDisable: {
    width:normalize(350),
    height:normalize(48),
    backgroundColor: COLOR.GREY,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft:10
   

  },
  textSign: {
    color: COLOR.BLACK,
    fontSize:normalize(16),
    fontWeight: '900',
    alignSelf: 'center',
    lineHeight:normalize(17),
    fontStyle:'italic',
    textTransform:'uppercase'
  },
});
