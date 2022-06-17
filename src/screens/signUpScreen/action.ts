import axios from 'axios';

const SingUpApiCall = (values: {
  name: string;
  phoneNo: number;
  email: string;
  password: string;
  countryCode: string;
}) => {
  console.log('signupapiactionvalue', values);
  return (dispatch: any) => {
    axios({
      method: 'post',
      url: 'https://fivestardevapi.appskeeper.in/api/v1/user/signup',
      data: {
        name: values.name,
        phoneNo: values.phoneNo,
        email: values.email,
        password: values.password,
        countryCode: '+1',
      },
    })
      .then(resp => {
        dispatch({type:'SET_USERID', payload: resp.data.data});
        console.log('response', resp);
      })
      .catch(err => {
        console.log('error', err);
      });
  };
};

export default SingUpApiCall;
