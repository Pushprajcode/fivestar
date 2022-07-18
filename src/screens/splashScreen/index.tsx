import {View, StyleSheet, LogBox, Image, Animated} from 'react-native';

import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import IMAGES from '../../utils/localImages';
import {normalize, vh, vw} from '../../utils/dimension';
import COLOR from '../../utils/colors';
LogBox.ignoreAllLogs();

function SplashScreen(): any {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);
  const navigation = useNavigation<any>();
  setTimeout(() => {
    navigation.replace('LoginScreen');
  }, 3000);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={IMAGES.SPLASH_IMAGE} />
      <Image style={styles.imagebackground} source={IMAGES.BACKGROUND_IMAGE} />
      <View style={styles.fiveView}>
        <Image style={styles.fiveimage} source={IMAGES.FIVE_IMAGE} />
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}>
          <Image style={styles.imageStar} source={IMAGES.STAR_IMAGE} />
        </Animated.View>
      </View>
    </View>
  );
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  fadingContainer: {
    padding: normalize(20),
  },
  imagebackground: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  fiveView: {
    flexDirection: 'row',
    position: 'absolute',
  },
  fiveimage: {
    height: vh(80),
    width: vw(360),
    marginTop: normalize(70),
    alignSelf: 'center',
  },
  imageStar: {
    height: vh(80),
    width: vw(110.89),
    top: normalize(50),
    right: normalize(187),
    resizeMode: 'cover',
  },
});
