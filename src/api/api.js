import axios from 'axios';
import store from '@/store/store';

export default () => {

  return axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    // adapter: cache.adapter,
    headers: {
      'Authorization': 'Bearer ' + store.state.token
    }
  });
};
