import {
  View,
  StyleSheet,
  LogBox,
  Image,
  Animated,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import React, {useEffect, useRef} from 'react';

import {useNavigation} from '@react-navigation/native';
LogBox.ignoreAllLogs();
// const SplashScreen:()=>any{

// }
function SplashScreen(): any {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);
  const navigation = useNavigation<any>();
  setTimeout(() => {
    navigation.replace('LoginScreen');
  }, 3000);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        style={styles.image}
        source={require('../../assets/images/splashman.png')}
      />
      <Image
        style={styles.imagebackground}
        source={require('../../assets/images/background.png')}
      />
      <View style={styles.fiveView}>
        <Image
          style={styles.fiveimage}
          source={require('../../assets/images/five.png')}
        />
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}>
          <Image
            style={styles.imageStar}
            source={require('../../assets/images/star.png')}
          />
        </Animated.View>
      </View>
    </View>
  );
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  imagebackground: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  fiveView: {
    position: 'absolute',
    flexDirection: 'row',
    left: 29,
    top: 20,
    right: 29,
  },
  fiveimage: {
    height: 80,
    width: 360,
    marginTop: 70,
    alignSelf: 'center',
  },
  imageStar: {
    height: 80,
    width: 110.89,
    top: 50,
    right: 187,
    resizeMode: 'cover',
  },
});
