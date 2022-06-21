import axios from 'axios';

export default function OtpAction(str: any) {
  console.log('firstactionkadata', str);
  return (getState: any) => {
    const {
      signUpReducer: {userId, countryCode, phoneNo},
    } = getState();
    axios({
      method: 'post',
      url: 'https://fivestardevapi.appskeeper.in/api/v1/user/verify-only-otp',
      data: {
        userId: userId,
        otp: str,
        countryCode: countryCode,
        phoneNo: phoneNo,
      },
    })
      .then(resp => console.log('responseOTP', resp))
      .catch(error => console.log('error', error));
  };
}
