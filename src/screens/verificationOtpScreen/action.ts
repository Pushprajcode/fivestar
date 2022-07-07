import axios from 'axios';

export default function OtpAction(
  otp:string,
  countryCode: string,
  phoneNo:Number,
  userId: string,
  successResponse:Function,
  failureResponse:Function
) {
  // console.log('firstactionkadata', otp);

  console.log("data",otp)
  console.log('countrycode',countryCode),
  console.log('phoneNo.',phoneNo),
  console.log('userId',userId)
  console.log('api is called');
  return(dispatch: (arg0: { type: string; payload: any; }) => void)=>{
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
       console.log('responseOTP', resp);
       dispatch({type:'SET_OTP',payload:resp.data})
       return successResponse(resp)


    })

    .catch(error => failureResponse(error));
}
}
