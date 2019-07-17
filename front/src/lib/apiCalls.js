import axios from 'axios';
import { getToken } from './handleLocalStorage';

const token = getToken();
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

const get = async (url) => {
    const result = await axios.post(`http://localhost:3000${url}`);
     if (result && result.data) {
        return result.data
     }
     return null; 
}

const post = async (url, params) => {
    const result = await axios.post(`http://localhost:3000${url}`, {
        ...params
      });
     if (result && result.data) {
        return result.data
     }
     return null;     
}

export { get ,post }