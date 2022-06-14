// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';

// interface Props {
//   placeholder: string;
//   fun: any;
// }

// export default function Input(props: Props) {
//   // console.log(props)

//   return (
//     <View>
//       <TextInput
//         style={{height: 50, width: 300, borderWidth: 1, borderRadius: 5}}
//         placeholder={props.placeholder}
//         //value={}
//         onChangeText={text => props.fun(text)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Input() {
  return (
    <View>
      <Text>Input</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
