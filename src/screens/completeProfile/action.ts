import axios from 'axios';

export default function profileAction(
  otp: any,
  countryCode: string,
  phoneNo: number,
  userId: string,
  successResponse: Function,
) {
  console.log('firstactionkadata', otp);

  console.log('api is called');

  axios({
    method: 'post',
    url:'',
    data: {

    },
  })
    .then(resp => {
      console.log('responseprofile', resp);
      successResponse(resp);
    })

    .catch(error => console.log('error for otp', error));
}
