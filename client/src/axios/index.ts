import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: `${config.baseURL}`,
  headers: {
    'content-type': 'application/json',
  },
});

export default instance;
