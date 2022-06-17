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

export default function FanAthelite() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{borderWidth: 2, backgroundColor: 'black', flex: 1, top: 30}}>
      <View>
        <TouchableOpacity>
          <Image
            style={{height: 19.5, width: 11.92}}
            source={require('../../assets/images/VectorBack.png')}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '400',
            lineHeight: 32,
          }}>
          {'Who are you?'}
        </Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <ImageBackground
            style={{height: 104, width: 327, marginHorizontal: 24}}
            source={require('../../assets/images/fan.png')}
          />
          <Text
            style={{
              fontWeight: '900',
              fontSize: 24,
              color: 'white',
              alignSelf: 'center',
              right: 160,
              fontStyle: 'italic',
            }}>
            {'FAN'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground
            style={{height: 104, width: 327, marginHorizontal: 24}}
            source={require('../../assets/images/player.png')}
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
