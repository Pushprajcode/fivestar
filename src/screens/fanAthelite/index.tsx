import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
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
  const [fan, setFan] = useState('');
  //const [check, SetCheck] = useState(false);
  const onpressEdit = () => {
    return navigation.navigate('EditProfile');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomBackButton style={styles.backButtonStyle} />
      <View style={{flex: 0.5}}>
        <Text style={styles.text}>{STRINGS.TEXTLABLE.WHO_ARE_TEXT}</Text>
        <TouchableOpacity
          style={styles.fanViewer}
          onPress={() => {
            setFan(STRINGS.TEXTLABLE.FAN_TEXT);
          }}>
          <Image
            style={
              fan === STRINGS.TEXTLABLE.FAN_TEXT
                ? styles.fanborderStyle
                : styles.fanImage
            }
            source={IMAGES.FAN_IMAGE}
          />
          <Text style={styles.fanText}>{STRINGS.TEXTLABLE.FAN_TEXT}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fanViewer}
          onPress={() => {
            if (STRINGS.TEXTLABLE.FAN_TEXT != fan) {
              setFan(STRINGS.TEXTLABLE.ATHLETE_TEXT);
            }
          }}>
          <Image
            style={
              fan === STRINGS.TEXTLABLE.ATHLETE_TEXT
                ? styles.athleteBorderStyle
                : styles.athleteStyle
            }
            source={IMAGES.PLAYER_IMAGE}
          />
        </TouchableOpacity>
      </View>
      {fan != STRINGS.TEXTLABLE.FAN_TEXT &&
      fan != STRINGS.TEXTLABLE.ATHLETE_TEXT ? (
        <DisabledButton label="NEXT" style={styles.disableButtonStyle} />
      ) : (
        <EnabledButton
          label="NEXT"
          style={styles.enableButtonStyle}
          onPress={onpressEdit}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: COLOR.BLACK,
    flex: 1,
    paddingHorizontal: 10,
  },
  fanImageView: {
    flexDirection: 'row',
  },
  backButtonStyle: {
    right: 16,
  },

  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
    marginTop: normalize(20.5),
    fontStyle: 'italic',
  },
  fanImage: {
    height: vh(110),
    width: '100%',
    borderRadius: 5,
    borderWidth: normalize(1),
  },
  fanborderStyle: {
    height: vh(110),
    width: '100%',
    borderRadius: 5,
    borderWidth: normalize(1),
    borderColor: COLOR.PRIMARY_BLUE,
  },
  fanText: {
    fontWeight: '900',
    fontSize: 22,
    color: 'white',
    alignSelf: 'center',
    left: 50,
    fontStyle: 'italic',
    bottom: 50,
  },
  athleteStyle: {
    height: vh(110),
    width: '100%',
    borderRadius: 5,
    borderWidth: normalize(1),
    borderColor: COLOR.LIGHT_GREY,
  },
  athleteBorderStyle: {
    height: vh(110),
    width: '100%',
    borderRadius: 5,
    borderWidth: normalize(1),
    borderColor: COLOR.PRIMARY_BLUE,
  },
  customButtton: {
    flex: 0.45,
    justifyContent: 'flex-end',
  },
  enableButtonStyle: {
    position: 'absolute',
    marginTop: normalize(260),
  },
  disableButtonStyle: {
    position: 'absolute',
    marginTop: normalize(600),
  },
  fanViewer: {
    height: vh(110),
    width: '100%',
    marginVertical: 20,
  },
});
