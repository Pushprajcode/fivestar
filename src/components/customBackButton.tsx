import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import IMAGES from '../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import { normalize } from '../utils/dimension';

export default function CustomBackButton({style}: any) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Image style={[styles.backImage, style]} source={IMAGES.BACK_IMAGE} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backImage: {
    height: 19.5,
    width: 11.92,
    marginTop:normalize(20),
   marginLeft:normalize(18),
  },
});
