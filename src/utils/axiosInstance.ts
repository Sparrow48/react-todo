import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://fake-api-seven-rho.vercel.app/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 1000 * 60,
});
