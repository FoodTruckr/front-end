import axios from 'axios';

const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://foodtruckr.heroku.com/api',
    headers: {
      authorization: token,
    },
  });
};

export default axiosWithAuth;
