import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOGOUT,
} from '../actions/userAction';

const initialState = {
  userId: '',
  username: '',
  role: '',
  email: '',
  isLoading: false,
  token: window.localStorage.getItem('token') || false,
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        username: action.payload.username,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userId: action.payload.userId,
        username: action.payload.username,
        role: action.payload.role,
        email: action.payload.email,
        token: action.payload.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userId: '',
        username: '',
        role: '',
        email: '',
        token: window.localStorage.removeItem('token') || false,
      };
    default:
      return state;
  }
};

export default userReducer;
