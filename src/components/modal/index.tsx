import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import IMAGES from '../../utils/localImages';
import {EnabledButton} from '../customButton';
import COLOR from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {normalize, vh, vw} from '../../utils/dimension';
import STRINGS from '../../utils/strings';

export default function ModalScreen(props: any) {
  const navigation = useNavigation<any>();

  const [visible, setVisbile] = useState(false);

  return (
    <Modal isVisible={!visible}>
      <View style={styles.ContainerView}>
        <Image style={styles.thumbImageStyle} source={IMAGES.RIGHT_THUMB} />
        <Text style={styles.congrtsTextStyle}>
          {STRINGS.TEXTLABLE.CONGRATULATION}
        </Text>
        <Text style={styles.accountTextStyle}>
          {STRINGS.TEXTLABLE.YOUR_ACCOUNT}
        </Text>
        <Text style={styles.registerdTextStyle}>
          {STRINGS.TEXTLABLE.REGISTER}
        </Text>
        <EnabledButton
          label="continue"
          style={styles.continueButtonStyle}
          onPress={() => {
            setVisbile(!visible);
            navigation.navigate('FanAthelite');
          }}
        />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  ContainerView: {
    height: vh(244),
    width: vw(350),
    borderRadius: normalize(5),
    borderTopWidth: normalize(2),
    borderBottomWidth: normalize(0.2),
    borderLeftWidth: normalize(0.3),
    borderRightWidth: normalize(0.3),
    borderLeftColor: COLOR.LIGHT_BLUE,
    borderRightColor: COLOR.LIGHT_BLUE,
    borderBottomColor: COLOR.LIGHT_BLUE,
    borderTopColor: COLOR.LIGHT_BLUE,
    backgroundColor: COLOR.VERYDARK_GREY,
  },
  thumbImageStyle: {
    height: vh(25.45),
    width: vw(27.5),
    marginTop: normalize(38.8),
    alignSelf: 'center',
  },
  congrtsTextStyle: {
    top: normalize(8),
    lineHeight: normalize(24),
    fontSize: normalize(14),
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: COLOR.WHITE,
  },
  accountTextStyle: {
    lineHeight: normalize(20),
    fontSize: normalize(14),
    top: normalize(12),
    fontWeight: '400',
    textAlign: 'center',
    color: COLOR.WHITE,
  },
  registerdTextStyle: {
    fontSize: normalize(14),
    marginTop: normalize(10),
    lineHeight: normalize(20),
    fontWeight: '400',
    textAlign: 'center',
    color: COLOR.WHITE,
  },
  continueButtonStyle: {
    height: vh(48),
    width: vw(280),
    borderRadius: normalize(5),
    marginTop: normalize(15),
  },
});
