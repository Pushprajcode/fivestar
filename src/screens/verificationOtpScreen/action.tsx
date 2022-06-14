import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import axios from 'axios';
import {string} from 'yup';
export default function OtpAction(str: string) {
  return (dispatch: any, getstate: any) => {
    const otpData = getstate().SignUpReducer;
    console.log('aaya', otpData);
    axios({
      method: 'post',
      url: 'https://fivestardevapi.appskeeper.in/api/v1/user/verify-only-otp',
      data: {
        userId: otpData.userId,
        otp: str,
        countryCode: otpData.countryCode,
        phoneNo: otpData.phoneNo,
      },
    })
      .then(resp => console.log('responseOTP', resp))
      .catch(error => console.log('error', error));
  };
}

const styles = StyleSheet.create({});
