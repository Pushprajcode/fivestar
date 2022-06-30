import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import IMAGES from '../../utils/localImages';
import {EnabledButton} from '../customButton';
import COLOR from '../../utils/colors';

export default function ModalScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <Modal isVisible={true}>
      <View style={styles.ContainerView}>
        <Image style={styles.thumbImageStyle} source={IMAGES.RIGHT_THUMB} />
        <Text style={styles.congrtsTextStyle}>{'Congratulations'}</Text>
        <Text style={styles.accountTextStyle}>
          {'Your account has been successfully '}
        </Text>
        <Text style={styles.registerdTextStyle}>{'registered'}</Text>
        <EnabledButton label="continue"/>
       
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  ContainerView: {
    height: 324,
    width: 328,
    flex:1,
    top: 30,
  },
  thumbImageStyle: {
    alignSelf: 'center',
    height: 25.45,
    width: 27.5,
  },
  congrtsTextStyle: {
    fontWeight: '900',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
    top: 22,
  },
  accountTextStyle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: 'white',
    top: 22,
  },
  registerdTextStyle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    top: 20,
    color: 'white',
  },
});
