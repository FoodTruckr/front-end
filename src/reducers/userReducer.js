// import{ }

const initialState = {
  user: JSON.parse(window.localStorage.getItem("userInfo")) || {},
  isLoading: false,
  isLoggedin: window.localStorage.getItem("token"),
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
