import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import { useNavigation } from '@react-navigation/native'


export default function TermsScreen() {
    const navigation=useNavigation()
    const[text,setText]=useState<string>('')
    const[number,setNumber]=useState<number>(0)
   console.log('hiiii',)
       
  return (
    <View style={{flex:1,paddingTop:40,}}>
        <Text>asdfasdfa</Text>
        <Input placeholder={"email"} fun={setText}/>
        {/* <Input placeholder={"number"} fun={setText}/> */}
        {/* <Input value={"pass"} fun={setText}/>
        <Input value={"pass"} fun={setText}/>
        <Input value={"pass"} fun={setText}/>
        <Input value={"pass"} fun={setText}/>
        <Input value={"pagal"} fun={setText}/> */}
        <Input placeholder={'Password'} fun={setNumber}/>
        <Input placeholder={'wqertyuiok'} fun={setNumber}/>
        <Input placeholder={'Password'} fun={setNumber}/>
        <Input placeholder={'Password'} fun={setNumber}/>
        <TouchableOpacity  style={{height:30,width:120,borderWidth:1,backgroundColor:'green'}}
            onPress={()=>{
                console.log('Text',text)
                console.log('number',number)
               
             
            }}>
                <Text>{'submit'}</Text>

            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>navigation.navigate('CounrtyCode')}
            style={{height:30,width:200,backgroundColor:'red'}}>
                <Text>{'otherpress'}</Text>
            </TouchableOpacity>
     

    </View>
  )
}

const styles = StyleSheet.create({})