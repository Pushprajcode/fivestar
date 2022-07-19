import axios from 'axios';
import API_URL from '../../utils/apiUrl';
import STRINGS from '../../utils/strings';



export const HomeAction = (authToken: string, page: number) => {
const params={
page:page ,
limit:10,
reqFeed:'hgf'
  }
  return (dispatch: any, getState:any) => {
    const {homeData}=getState().HomeReducer
    const $https = axios.create({
      baseURL: API_URL.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .get('/user/contents',{params})

      .then(resp => {
        console.log('8474576476467--------->', resp.data.data.result);
        console.log('-----------> api call ' , page);
        let data=resp.data.data.result
        if(page===1)
        dispatch({
          type: STRINGS.ACTION_TYPE.REEL_DATA,
          payload: data,
        });
        else 
        dispatch({type:STRINGS.ACTION_TYPE.REEL_DATA , payload :[...homeData , ...data]})
      })
      .catch(err => {
        console.log('kfjkhjkhdfjk', err);
      });
  };
};
