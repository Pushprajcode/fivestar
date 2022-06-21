import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import CustomBackButton from '../../components/customBackButton';
import STRINGS from '../../utils/strings';
import IMAGES from '../../utils/localImages';

export default function FanAthelite() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={styles.safeAreaView}>
      <View>
       <CustomBackButton/>

        <Text style={styles.text}> 
          {STRINGS.TEXTLABLE.WHO_ARE_TEXT}
        </Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <ImageBackground
            style={styles.fanImage}
            source={IMAGES.FAN_IMAGE}
          />
          <Text
            style={styles.fanText}>
            {STRINGS.TEXTLABLE.FAN_TEXT}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground
            style={{height: 104, width: 327, marginHorizontal: 24}}
            source={IMAGES.PLAYER_IMAGE}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonUpdate}
          onPress={() => {
            navigation.navigate('CompleteProfile');
          }}>
          <Text style={styles.textSign}>{'SIGN IN'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView:{
   

  },








  text:{
      color: 'white',
      fontSize: 24,
      fontWeight: '400',
      lineHeight: 32,
  },
  fanImage:{
    height: 104, width: 327, marginHorizontal: 24

  },
  fanText:{
    
      fontWeight: '900',
      fontSize: 24,
      color: 'white',
      alignSelf: 'center',
      right: 160,
      fontStyle: 'italic',

  },
  button: {
    width: 328,
    height: 48,
    backgroundColor: '#44C2E3',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: 20,
  },
  buttonUpdate: {
    width: 328,
    height: 48,
    backgroundColor: '#282828',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: 20,
  },
  textSign: {
    color: '#595959',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 15,
    textTransform: 'uppercase',
  },
});
