import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

export default function SocialButton() {
  return (
    <View>
         <TouchableOpacity style={styles.google}>
              <Image
                style={styles.googleImage}
                source={require('../../assets/images/google.png')}
              />
              <Text style={styles.naming}>{'Continue with Google'}</Text>
            </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    google: {
        height: 48,
        width: 325,
        backgroundColor: 'white',
        margin: 20,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        borderRadius: 5,
    
      },
      googleImage: {
        height: 20,
        width: 20,
        marginRight: 10,
      },
      naming: {
        fontSize: 18,
      },

})