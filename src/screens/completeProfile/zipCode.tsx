import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomBackButton from '../../components/customBackButton';
import SearchTextinput from '../../components/customSearch';
import {useDispatch, useSelector} from 'react-redux';
import COLOR from '../../utils/colors';
import {normalize} from '../../utils/dimension';
import STRINGS from '../../utils/strings';
import {zipcodeAction} from './action';

export default function ZipCode({route}: any) {
  const dispacth = useDispatch();
  const {zipcode} = route.params;
  console.log(zipcode);
  const {zipCodeData} = useSelector(
    (store: any) => store.completProfileReducer,
  );

  const onChange = (text: any) => {
    dispacth(zipcodeAction(text));
  };

  const data = zipCodeData.result;
  const renderitem = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => zipcode(item.zipcode)}>
        <View style={styles.zipcodeView}>
          <Text style={styles.textStylezipcode}>{item.zipcode}, </Text>
          <Text style={styles.textStylezipcode}>{item.city},</Text>
          <Text style={styles.textStylezipcode}>{item.state}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const itemseprator = () => {
    return <View style={styles.itemSepratorstyle}></View>;
  };
  return (
    <View style={styles.containerView}>
      <CustomBackButton style={styles.backbuttonStyle} />
      <SearchTextinput
        text={STRINGS.TEXTLABLE.SEARCH_ZIPCODE}
        placeholder={STRINGS.TEXTLABLE.SEARCH_ZIPCODE}
        onChangeText = {onChange}
      />
      <FlatList
        data={data}
        renderItem={renderitem}
        ItemSeparatorComponent={itemseprator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: COLOR.BLACK,
    flex: 1,
  },
  backbuttonStyle: {
    marginLeft: normalize(24),
    marginTop: normalize(40),
  },
  zipcodeView: {
    flexDirection: 'row',
    height: 65,

    // borderBottomWidth: 1,
    // top: normalize(30),
    // borderBottomColor: COLOR.LIGHT_GREY,
    marginLeft: normalize(35),
  },
  textStylezipcode: {
    color: COLOR.WHITE,
    alignSelf: 'center',
  },
  itemSepratorstyle: {
    height: 2,
    width: '100%',
    backgroundColor: COLOR.GREY,
  },
});
