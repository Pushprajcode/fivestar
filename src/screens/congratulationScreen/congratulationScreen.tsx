import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'
import Modal from "react-native-modal";




export default function CongratulationScreen() {
    const [isModalVisible, setModalVisible] = useState(false);
  return (
     <View style={{height:
        224,width:328,borderWidth:1,borderColor:'red',top:300,backgroundColor:'black'}}>
        <Image style={{alignSelf:'center',height:25.45,width:27.5}}
         source={require('../../assets/images/rightthumb.png')}/>
         <Text style={{fontWeight:'900',fontSize:24,lineHeight:24,textAlign:'center',textTransform:"uppercase",color:'white',top:22}}>{'Congratulations'}</Text>
         <Text style={{fontWeight:'400',fontSize:14,lineHeight:20,textAlign:'center',color:'white',top:22}}>{'Your account has been successfully registered'
}</Text>
 
        
         


     </View>
  )
}

const styles = StyleSheet.create({})