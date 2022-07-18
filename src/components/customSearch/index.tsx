import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {normalize, vh, vw} from '../../utils/dimension';
import COLOR from '../../utils/colors';
import IMAGES from '../../utils/localImages';

export default function SearchTextinput(props: any) {
  const {text, placeholder, style, onChangeText} = props;

  return (
    <View>
      <Text style={styles.seachTextStyle}>{text}</Text>
      <View style={styles.textinputView}>
        <TouchableOpacity>
          <Image style={styles.searchImgStyle} source={IMAGES.SEARCH_IMAGE} />
        </TouchableOpacity>
        <TextInput
          style={[styles.texinputStyle, style]}
          placeholder={placeholder}
          placeholderTextColor={COLOR.WHITE}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  seachTextStyle: {
    fontSize: normalize(24),
    marginLeft: normalize(24),
    lineHeight: normalize(32),
    color: COLOR.WHITE,
    fontStyle: 'italic',
  },
  textinputView: {
    borderWidth: 1,
    width: normalize(345),
    height: normalize(45),
    marginLeft: normalize(20),
    marginTop: normalize(20),
    borderColor: COLOR.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: normalize(20),
    borderRadius: normalize(5),
    color: COLOR.WHITE,
  },
  texinputStyle: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
    fontWeight: '900',
  },
  searchImgStyle: {
    height: vh(25),
    width: vw(25),
    resizeMode: 'contain',
    marginLeft: normalize(10),
  },
});
