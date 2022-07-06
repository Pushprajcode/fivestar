import axios from 'axios';

export default function postApi(url: string, data: object) {
  axios({
    method: 'post',
    url: url,
    data: data,
  })
}
