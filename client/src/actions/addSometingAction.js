import axios from 'axios';

export const addSomething = (event) => {
  return dispatch => {
    return axios.post('/api/addSomething',event);
  }
}