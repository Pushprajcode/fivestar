import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState,useRef, useCallback} from 'react'

export default function OtpInput(props) {
    const [text, setText] = useState('');
  const {callBack}=props
  return (
    <TextInput
    maxLength={1}
    keyboardType="numeric"
    style={styles.OtpBoxStyl}
    onChangeText={(text)=>{callBack(text)}}
  />
  )
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
})