import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {normalize, vh, vw} from '../../utils/dimension';
import IMAGES from '../../utils/localImages';
import STRINGS from '../../utils/strings';
import COLOR from '../../utils/colors';
import {Modal} from 'react-native';

export default function IdentityModal(props: {
  visible: boolean;
  crossPress: any;
  setIdentity: string;
  identity: string;
  callback: Function;
}) {
  const [select, setSelect] = useState('');
  return (
    <View>
      <Modal transparent={true} visible={props.visible}>
        <View style={styles.containerView}>
          <TouchableOpacity
            style={styles.crossImageViewStyle}
            onPress={props.crossPress}>
            <Image style={styles.crossImageStyle} source={IMAGES.CROSS_IMAGE} />
          </TouchableOpacity>
          <View style={styles.identityView}>
            <Text style={styles.selectTextStyle}>
              {STRINGS.TEXTLABLE.SELECT_IDENTITY}
            </Text>
          </View>

          <View style={styles.fanView}>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => {
                setSelect(STRINGS.TEXTLABLE.FAN_TEXT);
                props.callback(STRINGS.TEXTLABLE.FAN_TEXT);
              }}>
              <Image
                style={
                  select === STRINGS.TEXTLABLE.FAN_TEXT
                    ? styles.fanborderStyle
                    : styles.fanImageStyle
                }
                source={IMAGES.FAN_IMAGE}
              />
              {select == STRINGS.TEXTLABLE.FAN_TEXT ? (
                <Image
                  style={styles.tickImgeStyle}
                  source={IMAGES.Tick_IMAGE}
                />
              ) : null}

              <Text style={styles.fanTextStyle}>
                {STRINGS.TEXTLABLE.FAN_TEXT}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => {
                setSelect(STRINGS.TEXTLABLE.ATHLETE_TEXT);
                props.callback(STRINGS.TEXTLABLE.ATHLETE_TEXT);
              }}>
              <Image
                style={
                  select === STRINGS.TEXTLABLE.ATHLETE_TEXT
                    ? styles.playerImageborderStyle
                    : styles.playerImageStyle
                }
                source={IMAGES.PLAYER_IMAGE}
              />
              {select == STRINGS.TEXTLABLE.ATHLETE_TEXT ? (
                <Image
                  style={styles.plyaerTickImageStyle}
                  source={IMAGES.Tick_IMAGE}
                />
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 0.48,
    marginTop: 'auto',
    width: vw(375),
    height: vh(80),
    borderTopWidth: 4,
    borderColor: COLOR.SUMMER_SKY,
    backgroundColor: '#121212',
  },
  identityView: {
    height: 32,
    width: 245,
    left: 25,
    right: 105,
    marginTop: normalize(10),
  },
  tickImgeStyle: {
    position: 'absolute',
    height: 20,
    width: 20,
    resizeMode: 'contain',
    right: 13,
    top: 10,
  },
  plyaerTickImageStyle: {
    position: 'absolute',
    height: 20,
    width: 20,
    right: 13,
    top: 37,
  },
  crossImageViewStyle: {
    flexDirection: 'row-reverse',
  },
  crossImageStyle: {
    height: vh(26),
    width: vw(26),
    resizeMode: 'contain',
    marginTop: normalize(18),
    marginRight: normalize(24),
  },

  selectTextStyle: {
    color: COLOR.WHITE,
    fontWeight: '900',
    lineHeight: normalize(32),
    fontStyle: 'italic',
    fontSize: 24,
    top: normalize(2),
  },
  fanView: {
    alignSelf: 'center',
    marginTop: 30,
  },
  fanImageStyle: {
    height: vh(105),
    width: vw(335),
    borderRadius: 5,
    borderWidth: normalize(1),
    borderColor: COLOR.DARK_GREY,
    left: 3,
  },
  fanborderStyle: {
    height: vh(105),
    width: vw(335),
    borderRadius: 5,
    borderWidth: normalize(1),
    borderColor: COLOR.PRIMARY_BLUE,
    left: 3,
  },
  playerImageStyle: {
    height: vh(105),
    width: vw(335),
    marginVertical: 30,
    borderColor: COLOR.DARK_GREY,
  },
  playerImageborderStyle: {
    height: vh(105),
    width: vw(335),
    borderRadius: 5,
    borderWidth: normalize(1),
    marginVertical: 30,
    left: 3,
    borderColor: COLOR.PRIMARY_BLUE,
  },
  fanTextStyle: {
    color: COLOR.WHITE,
    fontSize: normalize(24),
    fontWeight: '900',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
    right: 95,
    marginTop: 30,
    fontStyle: 'italic',
    width: vw(51),
  },
});
