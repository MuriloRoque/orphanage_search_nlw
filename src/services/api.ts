import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.169:3333',
})

export default api