import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://fake-api-seven-rho.vercel.app/',
});
