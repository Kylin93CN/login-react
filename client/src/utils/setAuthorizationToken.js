import axios from 'axios';

const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common['setAuthorizationToken'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['setAuthorizationToken'];
  }
}

export default setAuthorizationToken;
