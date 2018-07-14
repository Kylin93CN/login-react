import  axios from 'axios';
import jwtDecode from 'jwt-decode';

import { SET_CURRENT_USER} from '../const';
import setAuthorizationToken  from '../utils/setAuthorizationToken';

export const login = (data) => {
  return dispatch => {
    return axios.post('/api/auth',data).then(
      res => {
        const token = res.data.token;

        localStorage.setItem('jwtToken',token);
        setAuthorizationToken(token);
        dispatch(setCurrenUser(jwtDecode(token)));
      }
    );
  }
};

export const setCurrenUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  }
}