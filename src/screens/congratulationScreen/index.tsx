import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import IMAGES from '../../utils/localImages';
export default function CongratulationScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Modal isVisible={true}>
      <View style={styles.modalView}>
        <Image style={styles.ThumImageStyle} source={IMAGES.RIGHT_THUMB} />
        <Text style={styles.congratulationTextStyle}>{'Congratulations'}</Text>
        <Text style={styles.yourAccountStyle}>
          {'Your account has been successfully '}
        </Text>
        <Text style={styles.registerTextStyle}>{'registered'}</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    height: 224,
    width: 328,
    borderWidth: 1,
    borderColor: 'red',
    top: 300,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  ThumImageStyle: {alignSelf: 'center', height: 25.45, width: 27.5},
  yourAccountStyle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: 'white',
    top: 22,
  },
  registerTextStyle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    top: 20,
    color: 'white',
  },
  congratulationTextStyle: {
    fontWeight: '900',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
    top: 22,
  },
});
