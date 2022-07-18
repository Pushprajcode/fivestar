import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
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
          <Text style={styles.fanTextStyle}>{STRINGS.TEXTLABLE.FAN_TEXT}</Text>
          {fan === STRINGS.TEXTLABLE.FAN_TEXT ? (
            <Image style={styles.tickImageStyle} source={IMAGES.Tick_IMAGE} />
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fanViewer}
          onPress={() => {
            {
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
          {fan === STRINGS.TEXTLABLE.ATHLETE_TEXT ? (
            <Image style={styles.tickImageStyle} source={IMAGES.Tick_IMAGE} />
          ) : null}
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
    color: COLOR.WHITE,
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
    borderColor: COLOR.LIGHT_GREY,
  },
  fanTextStyle:{
    color:COLOR.WHITE,
   position:'absolute',
   marginTop:normalize(43),
    fontStyle:'italic',
    marginLeft:normalize(212),
    fontWeight:'900',
    fontSize:24
  },
  tickImageStyle: {
    position: 'absolute',
    height: 20,
    width: 20,
    right: 13,
    top: 10,
    resizeMode:'contain'
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
    fontSize: normalize,
    color: COLOR.WHITE,
    alignSelf: 'center',
    left: normalize(62),
    fontStyle: 'italic',
    bottom: normalize(70),
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
    marginTop: 'auto',
  },
  disableButtonStyle: {
    marginTop: 'auto',
  },
  fanViewer: {
    height: vh(110),
    width: '100%',
    marginVertical: 20,
  },
});
