import axios from 'axios';

export function getImages() {
  return axios.get('https://dalle-arbb.onrender.com/api/v1/post', { params: { _sort: 'title' } });
}
