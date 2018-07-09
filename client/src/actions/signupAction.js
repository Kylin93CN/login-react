import axios from 'axios';

// 用户登录--发送请求
export const userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/users',userData);
  }
};