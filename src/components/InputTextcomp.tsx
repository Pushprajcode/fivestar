// import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image } from 'react-native'
// import React from 'react'

// export default function InputTextcomp(props:any) {
//   return (
   
//     <View style={styles.passwordVeiw}>
//     <TextInput
//       style={styles.passwordText}
//       value={props.value}
//       onChangeText={props.onChangeText}
//       placeholder={props.ph}
//       placeholderTextColor={'#ffffff'}
//       onBlur={props.onBlur}
//       secureTextEntry={props.secureTextEntry}
//     />

//    { props.icon &&
//    <TouchableOpacity
//       onPress={props.onPress
//         //setFieldValue('hidePassword', !values.hidePassword);
//       }>
//       {props.hidePassword? (
//         <Image
//           style={styles.eye}
//           source={require('../assets/images/eyewhite.png')}
//         />
//       ) : (
//         <Image
//           style={styles.eyeNew}
//           source={require('../assets/images/Vector.png')}
//         />
//       )}
//     </TouchableOpacity>
// }
//   </View>
//   )
// }

// const styles = StyleSheet.create({
//     passwordVeiw: {
//         flexDirection: 'row',
//         borderColor: 'white',
//         borderWidth: 1,
//         width: 327,
//         alignItems: 'center',
//         height: 48,
//         borderRadius: 5,
//         alignSelf: 'center',
        
//       },
//       passwordText: {
//         marginLeft: 0,
//         // left: 0,
//         width: 280,
//         borderWidth: 0,
//         margin: 10,
//         height: 48,
    
//         borderRadius: 5,
    
//         borderColor: '#FFFFFF',
//         color: '#44C2E3',
    
//         padding: 16,
//         paddingTop: 12,
//         paddingBottom: 12,
//       },
//       eye: {
//         height: 20,
//         width: 20,
//         resizeMode: 'contain',
//       },
//       eyeNew: {
//         height: 20,
//         width: 20,
//         resizeMode: 'contain',
//       },

// })
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function InputTextcomp() {
  return (
    <View>
      <Text>InputTextcomp</Text>
    </View>
  )
}

const styles = StyleSheet.create({})