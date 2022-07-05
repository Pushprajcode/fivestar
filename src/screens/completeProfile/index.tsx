import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-date-picker';
import InputTextcomp from '../../components/customTextInput';
import CustomBackButton from '../../components/customBackButton';
import STRINGS from '../../utils/strings';
import IMAGES from '../../utils/localImages';
import {DisabledButton, EnabledButton} from '../../components/customButton';
import {normalize, vh, vw} from '../../utils/dimension';
import COLOR from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import IdentityModal from '../../components/identityModal';

const EditProfile = () => {
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
        console.log('image path', image);
        setImage(image.path);
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
    <SafeAreaView style={styles.mainViewStyle}>
      <CustomBackButton style={styles.backButtonStyle} />
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView>
        <View style={styles.textTellView}>
          <Text style={styles.textcolor}> {STRINGS.TEXTLABLE.JOHN}</Text>
          <Text style={styles.textcolor}>{STRINGS.TEXTLABLE.ABOUT_YOU}</Text>
        </View>

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
          <InputTextcomp
            label="Change your Username *"
            style={styles.textInputStyle}
          />

          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}
            style={{
              height: 48,
              width: '100%',
              borderWidth: 2,
              borderColor: 'white',
            }}>
            <Text style={{color: 'white'}}>{'select your identity'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row-reverse'}}>
            <Image style={styles.identityImageStyle} source={IMAGES.RIGHT} />
          </TouchableOpacity>

          <TouchableOpacity>
            <InputTextcomp label={'DOB'} />
            <TouchableOpacity onPress={onpressDate}>
              <Image style={styles.dobImageStyle} source={IMAGES.DATE} />
            </TouchableOpacity>
          </TouchableOpacity>
          <InputTextcomp label="Bio" />
          <InputTextcomp label="Referral Code" />
          <InputTextcomp label="Sports I Watch" />
        </View>
      </ScrollView>

      <EnabledButton label="NEXT" />

      {visible && (
        <IdentityModal visible={visible} crossPress={() => setVisible(false)} />
      )}
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: 'black',
  },
  backButtonStyle: {
    marginLeft: normalize(8),
  },
  textTellView: {
    height: vh(64),
    width: vw(270),
    left: normalize(24),
  },
  textcolor: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: normalize(30),
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
    position: 'absolute',
    top: 200,
  },
  cameraStyle: {
    height: vh(35),
    width: vw(35),
  },
  cameraStyle2: {
    height: vh(25),
    width: vw(25),
    opacity: 0.6,
  },
  prof: {
    width: vw(97.6),
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
    marginTop: 30,
    marginHorizontal: normalize(24),
  },
  textInputStyle: {
    backgroundColor: 'red',
    color: 'red',
  },
  dobImageStyle: {
    height: 20,
    width: 20,
    left: 275,
    bottom: 35,
  },
  identityImageStyle: {
    height: vh(20),
    width: vw(10),
    bottom: normalize(35),
    marginRight: normalize(10),
  },
});
