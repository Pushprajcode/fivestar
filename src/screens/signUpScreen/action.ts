import axios from 'axios';
import STRINGS from '../../utils/strings';

const singUpApiCall = (
  values: {
    name: string;
    email: string;
    password: string;
    countryCode: string;
    phoneNo: number;
  },
  callback: Function,
) => {
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
        dispatch({type: STRINGS.ACTION_TYPE.SIGN_UP, payload: resp.data.data});
        callback(resp);
      })
      .catch(err => {
        console.log('error', err);
      });
  };
};

export default singUpApiCall;
