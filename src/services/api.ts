import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3556',
});

export default api;
