import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function TermsScreen() {
  return (
      <SafeAreaView style={{flex:1,backgroundColor:"black"}}>
          <View style={styles.termsUse}>
              <TouchableOpacity>
          <Image 
            style={styles.image}
           source={require('../../assets/images/VectorBack.png')}/>
           </TouchableOpacity>

          <Text style={{color:'#ffffff',fontWeight:'400',fontSize:24,marginHorizontal:19}}>{'Terms of use'}</Text>
          </View>
          <Text style={{color:'#ffffff',marginHorizontal:23,marginVertical:20,fontWeight:'400',fontSize:14}}>{'The Fivestar Mobile Application (“App”) and all services provided through the App (collectively, “Services”) are made available by Fivestar App, Inc. (“Fivestar,” “us,” “our,” and/or “we”).  Certain features of the App and Services may be subject to additional guidelines, terms, or rules, which will be posted through the App or Services in connection with such features.  All such additional terms, guidelines, and rules are incorporated by reference into this Agreement.  References to “you” and “your” refer to you, a user of our App and/or Services.'}</Text>
          <Text style={{color:"#FFFFFF",marginLeft:23,marginVertical:10,marginRight:24,fontWeight:'400',fontSize:14}}>
              {"THESE TERMS OF USE (“AGREEMENT”) SET FORTH THE LEGALLY BINDING TERMS FOR YOUR USE OF THE APP AND SERVICES.  BY ACCESSING OR USING THE APP OR SERVICES, YOU ARE ACCEPTING THIS AGREEMENT AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THIS AGREEMENT.  YOU MAY NOT ACCESS OR USE THE APP OR SERVICES OR ACCEPT THE AGREEMENT IF YOU DO NOT HAVE THE CAPACITY TO ENTER INTO THIS AGREEMENT.  IF YOU DO NOT AGREE WITH ALL OF THE PROVISIONS OF THIS AGREEMENT, DO NOT ACCESS AND/OR USE THE APP OR SERVICES.  IF YOU ARE USING THE APP OR SERVICES ON BEHALF OF A COMPANY, ENTITY, OR ORGANIZATION, YOU REPRESENT AND WARRANT THAT YOU ARE AN AUTHORIZED REPRESENTATIVE OF SUCH COMPANY, ENTITY, OR ORGANIZATION WITH THE AUTHORITY TO BIND IT TO THIS AGREEMENT"}
          </Text>
          
          

      </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    termsUse:{
        flexDirection:"row",
        // borderWidth:2,
        // borderColor:'red',
        marginLeft:25

       
        
        
    },
    image:{
        height:19.5,
        width:11.92,
        marginVertical:5
    }


})