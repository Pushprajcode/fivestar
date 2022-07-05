import axios from 'axios';

export default function OtpAction(
  otp: any,
  countryCode: string,
  phoneNo: number,
  userId: string,
) {
  console.log('firstactionkadata', otp);

  console.log('api is called');

  axios({
    method: 'post',
    url: 'https://fivestardevapi.appskeeper.in/api/v1/user/verify-only-otp',
    data: {
      userId: userId,
      otp: otp,
      countryCode: countryCode,
      phoneNo: phoneNo,
    },
  })
    .then(resp => {
      return console.log('responseOTP', resp);
    })

    .catch(error => console.log('error for otp', error));
}
