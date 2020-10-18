import axios from 'axios';

const api = axios.create({
  baseURL: 'https://orphanage-server.herokuapp.com',
})

export default api;