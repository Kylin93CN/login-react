import axios from 'axios';

// 用户登录--发送请求
export const userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/users',userData);
  }
};

// 前端验证用户信息唯一性
export const isUserExists = (identifier) => {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`,identifier);
  }
};