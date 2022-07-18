import axios from 'axios';
import STRINGS from '../../utils/strings';

export default function OtpAction(
  userId: string,
  otp: string,
  countryCode: string,
  phoneNo: Number,
  successResponse: Function,
  failureResponse: Function,
) {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    axios({
      method: 'post',
      url: 'https://fivestardevapi.appskeeper.in/api/v1/user/verify-otp',
      data: {
        userId: userId,
        otp: otp,
        countryCode: countryCode,
        phoneNo: phoneNo,
      },
    })
      .then(resp => {
        dispatch({type: STRINGS.ACTION_TYPE.SET_OTP, payload: resp.data});
        return successResponse(resp);
      })

      .catch(error => {
        failureResponse(error);
        console.log('##########', error);
      });
  };
}
