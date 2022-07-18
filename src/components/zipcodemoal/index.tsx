import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';
import CustomBackButton from '../../components/customBackButton';
import SearchTextinput from '../../components/customSearch';
import {useSelector} from 'react-redux';
import COLOR from '../../utils/colors';
import {normalize, vh} from '../../utils/dimension';

export default function ZipCodeModal({route}: any, props: any) {
  const {visible} = props;
  // const[zipcode,setZipCode]=useState('')
  // const {zipcode} = route.params;
  // console.log(zipcode);
  const {zipCodeData} = useSelector(
    (store: any) => store.completProfileReducer,
  );
  // console.log('zipcode34567890', zipcode);
  const data = zipCodeData.result;
  const renderitem = ({item}: any) => {
    //  console.log('itemwilllllllllll',item)
    return (
      <TouchableOpacity
      // onPress={() => zipcode(item.zipcode)}
      >
        <View style={styles.zipcodeView}>
          <Text style={{color: COLOR.WHITE}}>{item.zipcode}, </Text>
          <Text style={{color: COLOR.WHITE}}>{item.city}</Text>
          <Text style={{color: COLOR.WHITE}}>{item.state}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.containerView}>
      <Modal visible={visible}>
        <CustomBackButton style={styles.backbuttonStyle} />
        <SearchTextinput />
        <FlatList data={data} renderItem={renderitem} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView:  
  {backgroundColor: COLOR.BLACK,
     flex: 1},
  backbuttonStyle: {
    marginLeft: normalize(24),
    marginTop: normalize(40),
  },
  zipcodeView: {
    top: normalize(20),
    width: '100%',
    borderWidth: 0.4,
    height:vh(65),
    flexDirection: 'row',
    borderColor: COLOR.LIGHT_GREY,
  },
});
