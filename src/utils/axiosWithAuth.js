import axios from 'axios';

const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');

  const nodeAPI = 'foodtruktrackr';
  // const javaAPI = '';

  return axios.create({
    baseURL: `https://${nodeAPI}.herokuapp.com/api`,
    headers: {
      authorization: token,
    },
  });
};

export default axiosWithAuth;
