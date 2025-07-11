// src/api/axios.ts

import axios from 'axios';

const baseURL = 'https://tracksmart-backend.onrender.com';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // Set to true only if using cookies/session-based auth
});

export default axiosInstance;
