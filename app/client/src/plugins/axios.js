import axios from 'axios';

let authToken = null;
if (localStorage.getItem('giatto-user')) {
  const { token } = JSON.parse(localStorage.getItem('giatto-user'));
  authToken = token;
}

const instance = axios.create();

if (authToken) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['accept']  = 'application/json';

export default instance;
