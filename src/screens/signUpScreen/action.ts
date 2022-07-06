import axios from 'axios';

const singUpApiCall = (values: {
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
        email: values.email,
        password: values.password,
        countryCode: '+1',
        phoneNo: values.phoneNo,
      },
    })
      .then(resp => {
        console.log('response', resp);
        dispatch({type: 'SET_USERID', payload: resp.data.data});
      })
      .catch(err => {
        console.log('error', err);
      });
  };
};

export default singUpApiCall;
