import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import IMAGES from '../../utils/localImages';
import {vh, vw, normalize} from '../../utils/dimension';
import COLOR from '../../utils/colors';

const CustomSports = ({img, text, helper}: any) => {
  const [checked, setChecked] = useState<boolean>(false);
  const toggleCheckedItem = () => {
    helper(text);
    setChecked(!checked);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleCheckedItem}
        style={!checked ? styles.SportsViewStyle : styles.ActiveViewStyle}>
        {checked && (
          <Image source={IMAGES.Tick_IMAGE} style={styles.tickImgaeStyle} />
        )}
        <Image
          style={
            !checked ? styles.SportsImageStyle : styles.SportsActiveImageStyle
          }
          source={{uri: img}}
        />
        <Text
          style={
            !checked ? styles.SportsNameStyle : styles.SportsActiveNameStyle
          }>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSports;

const styles = StyleSheet.create({
  SportsImageStyle: {
    height: vh(45),
    width: vw(45),
    resizeMode: 'contain',
  },
  SportsActiveImageStyle: {
    height: vh(45),
    width: vw(45),
    resizeMode: 'contain',
    tintColor:COLOR.BLACK
  },
  SportsNameStyle: {
    color: COLOR.WHITE,
    marginTop: normalize(12),
    textAlign: 'center',
  },
  SportsActiveNameStyle: {
    color: COLOR.BLACK,
    marginTop: normalize(12),
    textAlign: 'center',
  },
  SportsViewStyle: {
    height: vh(112),
    width: vw(104),
    margin: normalize(8),
    backgroundColor:COLOR.VERYDARK_GREY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  tickImgaeStyle: {
    height: vh(16),
    width: vw(16),
    left: normalize(35),
  },
  ActiveViewStyle: {
    height: vh(112),
    width: vw(104),
    margin: normalize(8),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY_BLUE,
  },
  FlatListViewStyle: {
    marginHorizontal: normalize(4),
  },
  backImageStyle: {
    height: vh(20),
    width: vw(12),
    marginLeft: normalize(24),
    marginTop: normalize(8),
  },
  DisabledButtonStyle: {
    marginHorizontal: normalize(14),
  },
});
