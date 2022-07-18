import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CustomBackButton from '../../components/customBackButton';
import STRINGS from '../../utils/strings';
import COLOR from '../../utils/colors';
import { vh } from '../../utils/dimension';

export default function TermsScreen() {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.termsUse}>
        <CustomBackButton />

        <Text style={styles.termTextStyle}>{STRINGS.TEXTLABLE.TERM_USE}</Text>
      </View>
      <Text style={styles.fiveTextStyle}>
        {STRINGS.TEXTLABLE.FIVESTARMOBILE}
      </Text>
      <Text style={styles.termuseTextStyle}>
        {STRINGS.TEXTLABLE.THESE_TERM}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  termsUse: {
    flexDirection: 'row',
  },
  image: {
    height:vh(19.5),
    width: 11.92,
    marginVertical: 5,
  },
  termTextStyle: {
    color: COLOR.WHITE,
    fontWeight: '400',
    fontSize: 24,
    marginHorizontal: 19,
  },
  fiveTextStyle: {
    color: COLOR.WHITE,
    marginHorizontal: 23,
    marginVertical: 20,
    fontWeight: '400',
    fontSize: 14,
  },
  termuseTextStyle: {
    color: COLOR.WHITE,
    marginLeft: 23,
    marginVertical: 10,
    marginRight: 24,
    fontWeight: '400',
    fontSize: 14,
  },
});
