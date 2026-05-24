import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-backend-8bpb.onrender.com',
});

export default api;
