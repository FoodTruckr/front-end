import axiosWithAuth from '../utils/axiosWithAuth';

// sign up actions
export const SIGNUP_LOADING = 'SIGNUP_LOADING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// login actions
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// logout actions
export const USER_LOGOUT = 'USER_LOGOUT';

export const signUpUser = (signupCreds) => (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  axiosWithAuth()
    .post('/auth/new', signupCreds)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginUser = (loginCreds) => (dispatch) => {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('userInfo');
  dispatch({ type: LOGIN_LOADING });

  axiosWithAuth()
    .post('/auth/login', loginCreds)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logoutUser = () => {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('userInfo');
  return { type: USER_LOGOUT };
};
