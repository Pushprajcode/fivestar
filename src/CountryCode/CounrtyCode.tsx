import {View, Text, FlatList,TextInput} from 'react-native';
import React, { useState } from 'react';
import { CountryCode } from '../Data/CountryRawData';


export default function CounrtyCode() {
const [search,setSearch]=useState('')
const [text,setText]=useState('')
const SearchFilter=(text)=>{


}
  const renderItem = ({item}) => {
    return (
      <View style={{marginTop:10,borderWidth:1,borderColor:'red'}}>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View>
        <TextInput 
        style={{marginTop:40,height:40,width:'100%',borderWidth:1,borderColor:'blue'}}
        placeholder='search'
        onChangeText={(text)=>{setSearch(text)}}

        />

      <FlatList data={CountryCode} renderItem={renderItem} />
    </View>
  );
}
