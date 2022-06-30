import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import CustomBackButton from '../../components/customBackButton';
import STRINGS from '../../utils/strings';
import IMAGES from '../../utils/localImages';
import COLOR from '../../utils/colors';
import {DisabledButton, EnabledButton} from '../../components/customButton';
import {normalize, vh, vw} from '../../utils/dimension';

export default function FanAthelite() {
  const navigation = useNavigation<any>();
  const [fan, setFan] = useState(false);
  const onpressEdit = () => {
    return navigation.navigate('EditProfile')
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomBackButton style={styles.backButtonStyle} />
      <View style={{flex: 0.5}}>
        <Text style={styles.text}>{STRINGS.TEXTLABLE.WHO_ARE_TEXT}</Text>
        <TouchableOpacity
          style={styles.fanImageView}
          onPress={() => {
            setFan(!fan);
          }}>
          <ImageBackground style={styles.fanImage} source={IMAGES.FAN_IMAGE} />
          <Text style={styles.fanText}>{STRINGS.TEXTLABLE.FAN_TEXT}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            setFan(!fan);
          }}>
          <ImageBackground
            style={{height: 104, width: 327, marginHorizontal: 24}}
            source={IMAGES.PLAYER_IMAGE}
          />
        </TouchableOpacity>
      </View>
      {fan == true ? (
        <EnabledButton
          label="NEXT"
          style={styles.customButtton}
          onPress={onpressEdit}
        />
      ) : (
        <DisabledButton label="NEXT"/>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: COLOR.BLACK,
    flex: 1,
  },
  fanImageView: {
    flexDirection: 'row',
  },
  backButtonStyle: {
    marginLeft: normalize(25),
    marginTop: normalize(6),
  },

  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    lineHeight: normalize(32),
    marginLeft: normalize(21),
    marginTop: normalize(20.5),
  },
  fanImage: {
    height: vh(104),
    width: vw(320),
    marginHorizontal: 24,
    borderColor: COLOR.LIGHT_BLUE,
    borderWidth: 2,
    marginTop: normalize(32),
    marginVertical: normalize(25),
  },
  fanText: {
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
  customButtton: {
    flex: 0.45,
    justifyContent: 'flex-end',
  },
});
