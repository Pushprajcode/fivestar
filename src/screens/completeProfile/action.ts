import axios from 'axios';
import STRINGS from '../../utils/strings';
import API_URL from '../../utils/apiUrl';
import {useNavigation} from '@react-navigation/native';

export const SportAction = (data: string) => {
  //  {data =auth token}

  return (dispatch: any) => {
    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    $https.defaults.headers.common.Authorization = `Bearer ${data}`;
    $https
      .get('/user/sports')
      .then(resp => {
        dispatch({
          type: STRINGS.ACTION_TYPE.SET_SPORT,
          payload: resp.data.data,
        });
      })
      .catch(error => {
        console.log('sports', error);
      });
  };
};
export const zipcodeAction = (text: string) => {
  return (dispatch: any) => {
    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https
      .get(`/zipcode-list?&search=${text}&page=1`)
      .then(resp => {
        dispatch({
          type: STRINGS.ACTION_TYPE.SET_ZIPCODE,
          payload: resp.data.data,
        });
      })
      .catch(error => {
        console.log('sports', error);
      });
  };
};

export const userNameAction = (authToken: string) => {
  return () => {
    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .get(`/user/check-username?username=pushpraj&id=1`)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const completeProfileAction = (
  name: string,
  authToken: string,
  id: string,
  username: string,
  zipcode: string,
  callBack:Function,
  ErrorCallBack:Function,
) => {
  return () => {
    const $https = axios.create({
      baseURL: API_URL.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .post(`${API_URL.COMPLETE_PROFILE}`, {
        username,
        id,
        zipcode,
        name,
        userType: 1,
        personalDetails: {},
      })
      .then(response => {
        callBack(response)
        console.log('comppppllleter  ', response);
      })

      .catch(error => {
        ErrorCallBack(error)
        console.log('---78459849849589498', error);
      });
  };
};
