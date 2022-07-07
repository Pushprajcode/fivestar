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
    borderTopWidth: normalize(2),
    borderBottomWidth: normalize(0.2),
    borderLeftWidth: normalize(0.3),
    borderRightWidth: normalize(0.3),
    borderLeftColor: COLOR.LIGHT_BLUE,
    borderRightColor: COLOR.LIGHT_BLUE,
    borderBottomColor: COLOR.LIGHT_BLUE,
    borderTopColor: COLOR.LIGHT_BLUE,
    borderRadius: normalize(5),
    backgroundColor:COLOR.VERYDARK_GREY,
    height: vh(244),
    width: vw(350),
  },
  thumbImageStyle: {
    alignSelf: 'center',
    height: 25.45,
    width: 27.5,
    marginTop:normalize(38.8)
  },
  congrtsTextStyle: {
    fontWeight: '900',
    fontSize:normalize(14),
    lineHeight: normalize(24),
    textAlign: 'center',
    textTransform: 'uppercase',
    color:COLOR.WHITE,
    top:normalize(8),
  },
  accountTextStyle: {
    fontWeight: '400',
    fontSize:normalize(14),
    lineHeight:normalize(20),
    textAlign: 'center',
    color: COLOR.WHITE,
    top: normalize(12),
  },
  registerdTextStyle: {
    fontWeight: '400',
    fontSize:normalize(14),
    lineHeight:normalize(20),
    textAlign: 'center',
    marginTop:normalize(10),
    color: COLOR.WHITE,
  },
  continueButtonStyle: {
    height: vh(48),
    width: vw(280),
    borderRadius: normalize(5),
    marginTop:normalize(15)
  },
});
