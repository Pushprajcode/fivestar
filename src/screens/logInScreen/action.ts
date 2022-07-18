import axios from 'axios';

const LoginAction = (values: {
  email: string;
  password: string;
  countryCode: string;
  phoneNo: number;
}) => {
  console.log('signupapiactionvalue', values);
  return (dispatch: any) => {
    axios({
      method: 'post',
      url: 'https://fivestardevapi.appskeeper.in/api/v1/user/login',
      data: {
        email: values.email,
        password: values.password,
        countryCode: '+1',
        phoneNo:'9990456786',
      },
    })
      .then(resp => {
        console.log('response+++++++++++++++++', resp);
        // dispatch({type: 'SET_USERID', payload: resp.data.data});
      })
      .catch(err => {
        console.log('error', err);
      });
  };
};

export default LoginAction;
