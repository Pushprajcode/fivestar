import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import CustomBackButton from '../../components/customBackButton';
import STRINGS from '../../utils/strings';
import IMAGES from '../../utils/localImages';
import {DisabledButton, EnabledButton} from '../../components/customButton';
import {normalize, vh, vw} from '../../utils/dimension';
import COLOR from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import IdentityModal from '../../components/identityModal';
import {useDispatch, useSelector} from 'react-redux';
import CustomTextInput from '../../components/customTextInput';
import DobModal from '../../components/dobmodal';
import {SportAction} from './action';
import { completeProfileAction } from './action';

const EditProfile = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const {data} = useSelector((store: any) => store.verifyOtpReducer);
  const [imagepro, setImage] = useState('');
  const [imageShort, setImageShort] = useState('');
  const [visible, setVisible] = useState(false);
  const [dobVisible, setDobVisible] = useState(false);
  const [zipcode, setZipCode] = useState('');
  const [SelectedSports, setSelectedSports] = useState([]);
  const [selectfan, setSelectfan] = useState('');
  const [dob, setdob] = useState('');

  

  const onpress=()=>{
    completeProfileAction()
  }

  const imagePickerOnpress = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImage(image.path);

        console.log('image path', image);
      })
      .catch(err => {
        console.log('erorr--------->', err);
      });
  };
  const shortImagePickerOnpress = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 100,
      cropping: true,
    })
      .then(image => {
        console.log('image path', image);
        setImageShort(image.path);
      })
      .catch(err => {
        console.log('erorr--------->', err);
      });
  };

  const handleChange = (index: number) => {
    SelectedSports.splice(index, 1);
    setSelectedSports([...SelectedSports]);
  };
  return (
    <View style={styles.mainViewStyle}>
      <CustomBackButton style={styles.backButtonStyle} />
      <StatusBar barStyle="light-content" translucent={true} />

      <View style={styles.textTellView}>
        <Text style={styles.textcolor}> {STRINGS.TEXTLABLE.JOHN}</Text>
        <Text style={styles.textcolor}>{STRINGS.TEXTLABLE.ABOUT_YOU}</Text>
      </View>
      <ScrollView>
        {
          <TouchableOpacity onPress={imagePickerOnpress}>
            <ImageBackground style={styles.rectangle} source={{uri: imagepro}}>
              <Image style={styles.cameraStyle} source={IMAGES.CAMERA} />
            </ImageBackground>
          </TouchableOpacity>
        }

        {
          <TouchableOpacity
            onPress={shortImagePickerOnpress}
            style={styles.cameraViewStyle}>
            {
              <ImageBackground style={styles.prof} source={{uri: imageShort}}>
                <Image style={styles.cameraStyle2} source={IMAGES.CAMERA} />
              </ImageBackground>
            }
          </TouchableOpacity>
        }

        <View style={styles.textInputView}>
          <CustomTextInput
            //value={data?.username}
            label={STRINGS.TEXTLABLE.USER_NAME}
            style={styles.textInputStyle}
          />
          <TouchableOpacity style={styles.nameImgTouchable}>
            <Image style={styles.namearrowStyle} source={IMAGES.NAME_ARROW} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}
            style={styles.selectIdentityView}>
            <Text
              style={
                selectfan.length != 0
                  ? styles.fanText
                  : styles.identityTextStyle
              }>
              {selectfan.length != 0
                ? selectfan
                : STRINGS.TEXTLABLE.SELECT_IDENTITY}
            </Text>
            {selectfan.length > 0 && (
              <Text style={styles.sportwatchStyle}>
                {STRINGS.TEXTLABLE.SELECT_IDENTITY}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.commonArrowStyle}>
            <Image style={styles.identityImageStyle} source={IMAGES.RIGHT} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDobVisible(!dobVisible)}
            style={[styles.selectIdentityView, {marginTop: 0}]}>
            <Text
              style={
                dob.length > 0 ? styles.dobcolorStyle : styles.dobTextStyle
              }>
              {dob.length > 0 ? dob : STRINGS.TEXTLABLE.DOB}
            </Text>
            {dob.length > 0 && (
              <Text style={styles.sportwatchStyle}>
                {STRINGS.TEXTLABLE.DOB}
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.commonArrowStyle}>
            <Image style={styles.dobImageStyle} source={IMAGES.DATE} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ZipCode', {
                zipcode: setZipCode,
              });
            }}
            style={[styles.selectIdentityView,{marginTop:0}]}>
            <Text
              style={
                zipcode.length <= 0 ? styles.dobTextStyle : styles.zipcodestyle
              }>
              {zipcode.length <= 0 ? STRINGS.TEXTLABLE.ZIP_CODE : zipcode}
            </Text>
            {zipcode.length > 0 && (
              <Text style={styles.sportwatchStyle}>
                {STRINGS.TEXTLABLE.ZIP_CODE}
              </Text>
            )}
          </TouchableOpacity>

          <CustomTextInput
            label={STRINGS.TEXTLABLE.BIO}
            style={styles.boiTextInputStyle}
            multiline={true}
          />
          <CustomTextInput
            label={STRINGS.TEXTLABLE.REFERRAL}
            style={[styles.textInputStyle, , {marginBottom: 9}]}
          />
          <TouchableOpacity
            onPress={() => {
              dispatch(SportAction(data.data.authToken));
              navigation.navigate('SportsListData', {
                callback: (params: any) => {
                  setSelectedSports(params);
                },
              });
            }}
            style={styles.selectSpotsView}>
            {SelectedSports.length == 0 ? (
              <Text style={styles.sportText}>
                {STRINGS.TEXTLABLE.SPORT_WATCH}
              </Text>
            ) : (
              SelectedSports.map((element: any, index: number) => {
                return (
                  <View style={styles.elementTouchStyle}>
                    <Text style={styles.elementTextStyle}>{element}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        handleChange(index);
                      }}>
                      <Image
                        style={styles.crossImageStyle}
                        source={IMAGES.CROSS_SPORT_IMAGE}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })
            )}
            {SelectedSports.length > 0 && (
              <Text style={styles.sportwatchStyle}>
                {STRINGS.TEXTLABLE.SPORT_WATCH}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      <EnabledButton label="NEXT"
      onPress={onpress} />
      {/* identity modal component  called  */}
      {visible && (
        <IdentityModal
          visible={visible}
          crossPress={() => setVisible(false)}
          callback={(text: string) => {
            setSelectfan(text);
          }}
          setIdentity={''}
          identity={''}
        />
      )}
      {/* dob modal component called */}
      {dobVisible && (
        <DobModal
          visible={dobVisible}
          crossPress={() => setDobVisible(false)}
          callback={(chooseDate: React.SetStateAction<string>) => {
            setdob(chooseDate);
          }}
        />
      )}
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: normalize(20),
    paddingHorizontal: normalize(20),
  },
  backButtonStyle: {
    marginLeft: normalize(3),
    marginBottom: normalize(8),
  },
  textTellView: {
    height: vh(64),
    width: vw(270),
  },
  textcolor: {
    color: COLOR.WHITE,
    fontSize: normalize(24),
    fontWeight: '900',
    lineHeight: normalize(30),
    fontStyle: 'italic',
  },
  rectangle: {
    width: vw(328),
    height: vh(200),
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: normalize(5),
    backgroundColor: COLOR.LIGHT_BLACK,
    marginTop: normalize(38),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraViewStyle: {
    position: 'absolute',
    marginTop: normalize(190),
  },
  cameraStyle: {
    height: vh(18),
    width: vw(20),
    resizeMode: 'contain',
    opacity: 0.6,
  },
  cameraStyle2: {
    height: vh(20),
    width: vw(20),
    opacity: 0.6,
    resizeMode: 'contain',
  },
  prof: {
    width: vw(98),
    height: vh(98),
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: normalize(5),
    backgroundColor: COLOR.LIGHT_BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: normalize(20),
  },
  textInputView: {
    marginTop: normalize(60),
  },
  textInputStyle: {
    color: COLOR.WHITE,
    height: vh(48),
    width: vw(327),
  },
  nameImgTouchable: {
    position: 'absolute',
    marginTop: 25,
    right: normalize(20),
  },
  namearrowStyle: {
    height:vh(18),
    width: vw(18),
  },
  selectIdentityView: {
    height: vh(48),
    width: normalize(327),
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  identityImageStyle: {
    height: vh(20),
    width: vw(10),
    bottom: normalize(35),
    marginRight: normalize(20),
  },
  identityTextStyle: {
    color: COLOR.WHITE,
    marginLeft: normalize(10),
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
  },
  fanText: {
    color: COLOR.PRIMARY_BLUE,
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 24,
    marginLeft: normalize(17),
  },

  dobImageStyle: {
    height: vh(18),
    width: vw(18),
    bottom: 35,
    left: 20,
    resizeMode: 'contain',
  },
  dobTextStyle: {
    color: COLOR.WHITE,
    marginLeft: normalize(10),
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
  },
  dobcolorStyle: {
    color: COLOR.PRIMARY_BLUE,
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 24,
    marginLeft: normalize(17),
  },
  zipcodestyle: {
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 24,
    marginLeft: normalize(17),
    color: COLOR.PRIMARY_BLUE,
  },
  boiTextInputStyle: {
    height: vh(48),
    width: vw(328),
    marginTop: normalize(15),
  },
  elementTouchStyle: {
    flexDirection: 'row',
    backgroundColor: 'light-Black',
    paddingHorizontal: normalize(10),
    justifyContent: 'space-around',
    borderRadius: normalize(5),
    alignItems: 'center',
    marginVertical: normalize(10),
    height: 'auto',
  },
  elementTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  crossImageStyle: {
    height: normalize(10),
    width: normalize(10),
    resizeMode: 'contain',
    marginHorizontal: normalize(10),
  },
  commonArrowStyle: {
    flexDirection: 'row-reverse',
  },
  sportwatchStyle: {
    color: 'white',
    fontSize: 10,
    top: -10,
    left: 15,
    backgroundColor: 'black',
    paddingHorizontal: 6,
    paddingVertical: 2,
    position: 'absolute',
    textAlign: 'center',
  },
  selectSpotsView: {
    minHeight: vh(48),
    width: normalize(327),
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    borderRadius: 5,
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  sportText: {
    color: COLOR.WHITE,
  },
});
