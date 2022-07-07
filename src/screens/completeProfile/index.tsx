import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-date-picker';
import CustomBackButton from '../../components/customBackButton';
import STRINGS from '../../utils/strings';
import IMAGES from '../../utils/localImages';
import {DisabledButton, EnabledButton} from '../../components/customButton';
import {normalize, vh, vw} from '../../utils/dimension';
import COLOR from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import IdentityModal from '../../components/identityModal';
import profileAction from './action';
import {useSelector} from 'react-redux';
import {store} from '../../redux/reducer/store';
import verifyOtpReducer from '../verificationOtpScreen/reducer';
import CustomTextInput from '../../components/customTextInput';
import DobModal from '../../components/dobmodal';

const EditProfile = () => {
  const {data} = useSelector((store: any) => store.verifyOtpReducer);
  console.log('drtfyjghkh3456789', data);

  const navigation = useNavigation<any>();
  const [imagepro, setImage] = useState('');
  const [imageShort, setImageShort] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [chooseDate, setChooseDate] = useState('Date of Birth');
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState('');
  const onpressDate = () => {
    return (
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setChooseDate(
            [
              date.getMonth() + 1,
              '/',
              date.getDate(),
              '/',
              date.getFullYear(),
            ].join(''),
          );
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    );
  };
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
  return (
    <View style={styles.mainViewStyle}>
      <CustomBackButton style={styles.backButtonStyle} />
      <StatusBar barStyle="light-content" translucent={true} />

      <View style={styles.textTellView}>
        <Text style={styles.textcolor}> {STRINGS.TEXTLABLE.JOHN}</Text>
        <Text style={styles.textcolor}>{STRINGS.TEXTLABLE.ABOUT_YOU}</Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={imagePickerOnpress}>
          <ImageBackground style={styles.rectangle} source={{uri: imagepro}}>
            <Image style={styles.cameraStyle} source={IMAGES.CAMERA} />
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cameraViewStyle}>
          <ImageBackground style={styles.prof} source={{uri: imageShort}}>
            <Image style={styles.cameraStyle2} source={IMAGES.CAMERA} />
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.textInputView}>
          <CustomTextInput
            // value={data?.username}
            label={STRINGS.TEXTLABLE.USER_NAME}
            style={styles.textInputStyle}
          />

          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}
            style={styles.selectIdentityView}>
            <Text style={styles.identityTextStyle}>
              {STRINGS.TEXTLABLE.SELECT_IDENTITY}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row-reverse'}}>
            <Image style={styles.identityImageStyle} source={IMAGES.RIGHT} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}
            style={styles.selectIdentityView}>
            <Text style={styles.dobTextStyle}>{STRINGS.TEXTLABLE.DOB}</Text>
          </TouchableOpacity>
          {<DobModal visible={visible} />}
          <TouchableOpacity style={{flexDirection: 'row-reverse'}}>
            <Image style={styles.dobImageStyle} source={IMAGES.DATE} />
          </TouchableOpacity>

          <CustomTextInput
            label={STRINGS.TEXTLABLE.BIO}
            style={styles.textInputStyle}
          />
          <CustomTextInput
            label={STRINGS.TEXTLABLE.REFERRAL}
            style={styles.textInputStyle}
          />
          <CustomTextInput
            style={styles.textInputStyle}
            label={STRINGS.TEXTLABLE.SPORT_WATCH}
          />
        </View>
      </ScrollView>

      <EnabledButton label="NEXT" onPress={() => profileAction()} />

      {visible && (
        <IdentityModal visible={visible} crossPress={() => setVisible(false)} />
      )}
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
  },
  backButtonStyle: {
    marginLeft: normalize(24),
    marginBottom: normalize(8),
  },
  textTellView: {
    height: vh(64),
    width: vw(270),
    left: normalize(24),
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
    marginLeft: normalize(24),
    backgroundColor: COLOR.LIGHT_BLACK,
    marginTop: normalize(38),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraViewStyle: {
    bottom: normalize(40),
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
    marginLeft: normalize(44),
  },
  textInputView: {
    marginHorizontal: normalize(24),
  },
  textInputStyle: {
    color: COLOR.WHITE,
    height: vh(48),
    width: vw(327),
  },
  selectIdentityView: {
    height: vh(48),
    width: normalize(327),
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    marginTop: normalize(15),
    justifyContent: 'center',
    borderRadius: 5,
  },
  identityImageStyle: {
    height: vh(20),
    width: vw(10),
    bottom: normalize(35),
    marginRight: normalize(10),
  },
  identityTextStyle: {
    color: COLOR.WHITE,
    marginLeft: normalize(10),
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
  },
  dobImageStyle: {
    height: vh(20),
    width: vw(20),
    bottom: 35,
    left: 10,
    resizeMode: 'contain',
  },
  dobTextStyle: {
    color: COLOR.WHITE,
    marginLeft: normalize(10),
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
  },
});
