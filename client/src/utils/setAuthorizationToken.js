import axios from 'axios';

const setAuthorizationToken = (token) => {
  if (token) {
    // 设置头信息token
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
  } else {
    // 删除头信息token
    delete axios.defaults.headers.common['authorization'];
  }
}

export default setAuthorizationToken;
