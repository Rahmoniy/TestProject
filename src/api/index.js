import axios from 'axios';
import config from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default axios.create({
  baseURL: config.API_ROOT,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'B1S-CaseInsensitive': true,
  },
  transformResponse: data => {
    // console.log('data', data);
    return data;
  },
});
