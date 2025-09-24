import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
