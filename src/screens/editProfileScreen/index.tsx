import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import InputTextcomp from '../../components/customTextInput';
import CustomBackButton from '../../components/customBackButton';
import STRINGS from '../../utils/strings';
import IMAGES from '../../utils/localImages';
import { DisabledButton, EnabledButton } from '../../components/customButton';

const EditProfile = () => {
  const[imagepro,setImage]=useState(IMAGES.COVER_IMAGE)
  const imagePickerOnpress=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log("image path",image);
      setImage(image.path)
      
    }).catch((err)=>{
      console.log('erorr--------->',err);
      
    })
    ;
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <CustomBackButton style={styles.backButtonStyle} />
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView>
      <View style={styles.parent}>
        <Text style={styles.textcolor}> {STRINGS.TEXTLABLE.JOHN}</Text>
        <Text style={styles.textcolor}>{STRINGS.TEXTLABLE.ABOUT_YOU}</Text>
      </View>
     
        <View style={styles.cover}>
          <TouchableOpacity
          onPress={imagePickerOnpress}>
            <Image style={styles.rectangle} source={{uri:imagepro}} 
            />
            {/* <Image style={{height:400,width:300}}
             source={{uri:imagepro}}/> */}
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.prof} source={IMAGES.GROUP_IMAGE} />
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', height: 400}}>
          <InputTextcomp label="email"
            />
          <InputTextcomp label="Select Your Identity" />
          <InputTextcomp label="Date of Birth" />
          <InputTextcomp label="Zipcode*" />

          <InputTextcomp label="Bio" />
          <InputTextcomp label="Referral Code" />
          <InputTextcomp label="Sports I Watch" />
        </View>
      </ScrollView>
      <DisabledButton/>
      <EnabledButton label="NEXT"/>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  backButtonStyle: {
    marginLeft: 10,
  },
  parent: {
    marginLeft: 28,
    marginRight: 40,
    marginTop: 0,
  },
  textcolor: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cover: {
    height: 270,
    width: 330,
    padding: 22,
  },
  rectangle: {
    width: 328,
    height: 200,
    resizeMode: 'contain'
  },
  prof: {
    width: 160,
    height: 100,
    resizeMode: 'contain',
    bottom: 50,
  },
});
