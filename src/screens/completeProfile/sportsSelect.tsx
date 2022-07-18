import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {vh, normalize, vw} from '../../utils/dimension';
import COLOR from '../../utils/colors';
import SearchTextinput from '../../components/customSearch';
import {DisabledButton, EnabledButton} from '../../components/customButton';
import CustomBackButton from '../../components/customBackButton';
import CustomSports from '../../components/customsport';
import {useNavigation, useRoute} from '@react-navigation/native';
import STRINGS from '../../utils/strings';

const SportsListData = () => {
  const [selectedSports, setselectedSports] = React.useState<any>([]);
  
  const {callback} = useRoute<any>().params;
  const navigation = useNavigation<any>();
  const {profiledata} = useSelector(
    (store: any) => store.completProfileReducer,
    );
    const [data, setData] = useState(profiledata);

  React.useEffect(() => {
    callback(selectedSports);
  }, [selectedSports]);

  const helper = useCallback(
    (item: any) => {
      const index = selectedSports.findIndex((x: any) => x == item);
      if (index == -1) {
        setselectedSports([...selectedSports, item]);
      } else {
        selectedSports.splice(index, 1);
        setselectedSports([...selectedSports]);
      }
    },
    [selectedSports],
  );
  const renderItem = ({item}: any) => {
    return (
      <View>
        <CustomSports
          helper={helper}
          img={item?.sportImg}
          text={item?.sportName}
        />
      </View>
    );
  };

  const onChange = (text: any) => {
    console.log(text);
    setData(
      profiledata.filter((item: any) =>
        item?.sportName.toLowerCase().includes(text.toLowerCase()),
      ),
    );
    console.log("data=",data)
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <CustomBackButton />
      <SearchTextinput
        text={STRINGS.TEXTLABLE.SPORT_PLAY}
        placeholder={STRINGS.TEXTLABLE.SEARCH_SPORT}
        onChangeText={onChange}
      />

      <FlatList
        contentContainerStyle={styles.FlatListViewStyle}
        data={data}
        renderItem={renderItem}
        numColumns={3}
      />
      {selectedSports.length > 0 ? (
        <EnabledButton onPress={() => navigation.goBack()} label={'continue'} />
      ) : (
        <DisabledButton label={'continue'} />
      )}
    </SafeAreaView>
  );
};

export default SportsListData;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  SportsImageStyle: {
    height: vh(45),
    width: vw(45),
    resizeMode: 'contain',
    backgroundColor: 'red',
  },
  SportsActiveImageStyle: {
    height: vh(45),
    width: vw(45),
    resizeMode: 'contain',
    tintColor: 'black',
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
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  ActiveViewStyle: {
    height: vh(112),
    width: vw(104),
    margin: normalize(8),
    backgroundColor: COLOR.PRIMARY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  FlatListViewStyle: {
    marginHorizontal: normalize(4),
  },
  backImageStyle: {
    height: vh(20),
    width: vw(12),
    marginLeft: normalize(24),
  },
});
