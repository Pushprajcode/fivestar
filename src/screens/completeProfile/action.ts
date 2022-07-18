import axios from 'axios';
import STRINGS from '../../utils/strings';
import API_URL from '../../utils/apiUrl';

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
export const completeProfileAction = (
  authToken: string,
  username: string,
  id: string,
  zipcode: string,
  name: string,
  userType: string,
) => {
  console.log( username,
    id,
    zipcode,
    name,
    userType,)
  return () => {
    const $https = axios.create({
      baseURL: API_URL.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https.post(`${API_URL.COMPLETE_PROFILE}`, {
        username,
        id,
        zipcode,
        name,
        userType,
        personalDetails:{}
      })
      .then(response => {
        console.log("comppppllleter === ", response)
      })
      .catch(error => {
        console.log("complete==========>", error)
      });
  };
}


