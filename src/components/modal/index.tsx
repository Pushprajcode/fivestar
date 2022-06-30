import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import IMAGES from '../../utils/localImages';
import {EnabledButton} from '../customButton';
import COLOR from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {normalize} from '../../utils/dimension';

export default function ModalScreen(props: any) {
  const navigation = useNavigation<any>();

  const [visible, setVisbile] = useState(false);

  return (
    <Modal isVisible={!visible}>
      <View style={styles.ContainerView}>
        <Image style={styles.thumbImageStyle} source={IMAGES.RIGHT_THUMB} />
        <Text style={styles.congrtsTextStyle}>{'Congratulations'}</Text>
        <Text style={styles.accountTextStyle}>
          {'Your account has been successfully '}
        </Text>
        <Text style={styles.registerdTextStyle}>{'registered'}</Text>
        <EnabledButton
          label="continue"
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
    borderTopColor: COLOR.LIGHT_BLUE,
    borderRadius: normalize(5),
    flex: 0.29,
  },
  thumbImageStyle: {
    alignSelf: 'center',
    height: 25.45,
    width: 27.5,
    marginTop: 38,
  },
  congrtsTextStyle: {
    fontWeight: '900',
    fontSize: 24,
    lineHeight: normalize(24),
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
    top: 8,
  },
  accountTextStyle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: COLOR.WHITE,
    top: 12,
  },
  registerdTextStyle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 10,
    color: COLOR.WHITE,
  },
});
