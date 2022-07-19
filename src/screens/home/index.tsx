import {Alert, FlatList, StyleSheet, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Video from 'react-native-video';
import CustomBackButton from '../../components/customBackButton';
import { HomeAction } from './action';

export default function Home() {
  const {homeData} = useSelector((store: any) => store.HomeReducer);
  const {data} = useSelector((store: any) => store.verifyOtpReducer);
  const dispatch : Function=useDispatch();
  const [page , setPage]=useState(1)
  const authToken = data.data.authToken;
  const EndPage =()=>{
    Alert.alert('page end')
  
    dispatch(HomeAction(authToken,page));
    setPage(page+1);
    console.log("pagepagrpsgrgrfiurhgukgdfgiugdfkf", page);
    
  }
  const renderItemVideo = ({item}: any) => {
   // console.log(item.contentUrl);
    return (
      <Video
        style={{height:600, width:'100%'}}
        source={{uri: item?.contentUrl}}
      />
    );
  };
  useEffect(()=>{
    dispatch(HomeAction(authToken,page));
 
  },[])

  return (
    <View style={styles.containerView}>
      <CustomBackButton />
      <FlatList data={homeData} renderItem={renderItemVideo} onEndReachedThreshold={0.3} onEndReached={EndPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {backgroundColor: 'black', 
  flex: 1, 
  marginTop: 20},
});
