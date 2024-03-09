import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4131/',
  headers: {
    'Content-Type': 'application/json',
  },
});
