import { View, Text,SafeAreaView,StyleSheet,StatusBar,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import InputTextcomp from '../../components/customTextInput'



const CompleteProfile = () => {
  return (
   <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
          <StatusBar  barStyle="light-content" translucent={true} />
       <View style={styles.parent}>
       <Text style={styles.textcolor}> {'Hi John !'}</Text>
        <Text style={styles.textcolor}>{'Tell us about yourself'}</Text>
       </View>
       <ScrollView>
       <View style={styles.cover}>

      <TouchableOpacity style={styles.profile}>
    
       <Image
        style={styles.rectangle}
        source={require('../../assets/images/Cover.png')}
      />
        </TouchableOpacity>

      <TouchableOpacity>
      <Image
        style={styles.prof}
        source={require('../../assets/images/group.png')}
      />
      </TouchableOpacity>
      
       </View>
       <View style={{width:'100%',height:400}}>
         
         <InputTextcomp 
         label='email'/>
         <InputTextcomp 
         label='Select Your Identity'/>
         <InputTextcomp 
         label='Date of Birth'/>
         <InputTextcomp 
         label='Zipcode*'/>

             <InputTextcomp 
         label='Bio'/>
          <InputTextcomp 
         label='Referral Code'/>
          <InputTextcomp 
         label='Sports I Watch'/>
       </View>
       </ScrollView>
       
    
     
    
   </SafeAreaView>
  )
}

export default CompleteProfile;

const styles = StyleSheet.create({
   parent:{
    marginLeft:28,
     marginRight:40,
     marginTop:0
   },
   textcolor:{
       color:'white',
       fontSize:30,
       fontWeight:'bold',
       //fontFamily:'Helvetica-Black'
   },
   cover:{
    height:270,
    width:330,
    padding:22,
    // borderWidth:3,
    // borderColor:"red"
  
   },
   rectangle:{
     width:328,
     height:200,
     resizeMode:'contain'
   },
   profile:{
    //    marginTop:30,
     //  padding:30
   },
   prof:{
       width:160,
       height:100,
       resizeMode:'contain',
       bottom:50   
   }
})