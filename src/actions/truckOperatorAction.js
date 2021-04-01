import axiosWithAuth from '../utils/axiosWithAuth';

//!TRUCK ACTION TYPES

// GET truck operator
export const GET_OPERATOR_LOADING = 'GET_OPERATOR_LOADING';
export const GET_OPERATOR_SUCCESS = 'GET_OPERATOR_SUCCESS';
export const GET_OPERATOR_FAILURE = 'GET_OPERATOR_FAILURE';

//GET single truck
export const GET_OPERATOR_SINGLE_TRUCK_LOADING =
  'GET_OPERATOR_SINGLE_TRUCK_LOADING';
export const GET_OPERATOR_SINGLE_TRUCK_SUCCESS =
  'GET_OPERATOR_SINGLE_TRUCK_SUCCESS';
export const GET_OPERATOR_SINGLE_TRUCK_FAILURE =
  'GET_OPERATOR_SINGLE_TRUCK_FAILURE';

// POST operator new truck
export const POST_OPERATOR_TRUCK_LOADING = 'POST_OPERATOR_TRUCK_LOADING';
export const POST_OPERATOR_TRUCK_SUCCESS = 'POST_OPERATOR_TRUCK_SUCCESS';
export const POST_OPERATOR_TRUCK_FAILURE = 'POST_OPERATOR_TRUCK_FAILURE';

// PUT truck info
export const PUT_TRUCK_INFO_LOADING = 'PUT_TRUCK_INFO_LOADING';
export const PUT_TRUCK_INFO_SUCCESS = 'PUT_TRUCK_INFO_SUCCESS';
export const PUT_TRUCK_INFO_FAILURE = 'PUT_TRUCK_INFO_FAILURE';

// DELETE operator truck
export const DELETE_OPERATOR_TRUCK_LOADING = 'DELETE_OPERATOR_TRUCK_LOADING';
export const DELETE_OPERATOR_TRUCK_SUCCESS = 'DELETE_OPERATOR_TRUCK_SUCCESS';
export const DELETE_OPERATOR_TRUCK_FAILURE = 'DELETE_OPERATOR_TRUCK_FAILURE';

//!MENU ACTION TYPES

//GET menu items
export const GET_MENU_ITEM_LOADING = 'GET_MENU_ITEM_LOADING';
export const GET_MENU_ITEM_SUCCESS = 'GET_MENU_ITEM_SUCCESS';
export const GET_MENU_ITEM_FAILURE = 'GET_MENU_ITEM_FAILURE';

// POST menu new item
export const POST_MENU_ITEM_LOADING = 'POST_MENU_ITEM_LOADING';
export const POST_MENU_ITEM_SUCCESS = 'POST_MENU_ITEM_SUCCESS';
export const POST_MENU_ITEM_FAILURE = 'POST_MENU_ITEM_FAILURE';

// PUT menu item
export const PUT_MENU_ITEM_LOADING = 'PUT_MENU_ITEM_LOADING';
export const PUT_MENU_ITEM_SUCCESS = 'PUT_MENU_ITEM_SUCCESS';
export const PUT_MENU_ITEM_FAILURE = 'PUT_MENU_ITEM_FAILURE';

// DELETE menu item
export const DELETE_MENU_ITEM_LOADING = 'DELETE_MENU_ITEM_LOADING';
export const DELETE_MENU_ITEM_SUCCESS = 'DELETE_MENU_ITEM_SUCCESS';
export const DELETE_MENU_ITEM_FAILURE = 'DELETE_MENU_ITEM_FAILURE';

//!CUISINE ACTION TYPES

// GET cuisineTypes
export const GET_CUISINE_TYPE_LOADING = 'GET_CUISINE_TYPES_LOADING';
export const GET_CUISINE_TYPE_SUCCESS = 'GET_CUISINE_TYPES_SUCCESS';
export const GET_CUISINE_TYPE_FAILURE = 'GET_CUISINE_TYPES_FAILURE';

// POST new cuisine type
export const POST_CUISINE_TYPE_LOADING = 'POST_CUISINE_TYPE_LOADING';
export const POST_CUISINE_TYPE_SUCCESS = 'POST_CUISINE_TYPE_SUCCESS';
export const POST_CUISINE_TYPE_FAILURE = 'POST_CUISINE_TYPE_FAILURE';

// PUT new cuisine type
export const PUT_CUISINE_TYPE_LOADING = 'PUT_CUISINE_TYPE_LOADING';
export const PUT_CUISINE_TYPE_SUCCESS = 'PUT_CUISINE_TYPE_SUCCESS';
export const PUT_CUISINE_TYPE_FAILURE = 'POST_CUISINE_TYPE_FAILURE';

// DELETE cuisineType
export const DELETE_CUISINE_TYPE_LOADING = 'DELETE_CUISINE_TYPE_LOADING';
export const DELETE_CUISINE_TYPE_SUCCESS = 'DELETE_CUISINE_TYPE_SUCCESS';
export const DELETE_CUISINE_TYPE_FAILURE = 'DELETE_CUISINE_TYPE_FAILURE';

//!OPERATOR ACTION CREATORS

export const getOperator = () => (dispatch) => {
  dispatch({ type: GET_OPERATOR_LOADING });
  axiosWithAuth()
    .get(`/operator/`)
    .then((res) => {
      dispatch({ type: GET_OPERATOR_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_OPERATOR_FAILURE,
        payload: err,
      });
    });
};

export const getSingleTruckOperator = (truckId) => (dispatch) => {
  dispatch({ type: GET_OPERATOR_SINGLE_TRUCK_LOADING });
  axiosWithAuth()
    .get(`/trucks/${truckId}`)
    .then((res) => {
      dispatch({ type: GET_OPERATOR_SINGLE_TRUCK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_OPERATOR_SINGLE_TRUCK_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const putTruckInfo = (truckId) => (dispatch) => {
  dispatch({ type: PUT_TRUCK_INFO_LOADING });
  axiosWithAuth()
    .put(`/operator/${truckId}`)
    .then((res) => {
      dispatch({ type: PUT_TRUCK_INFO_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: PUT_TRUCK_INFO_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const postOperator = () => (dispatch) => {
  dispatch({ type: POST_OPERATOR_TRUCK_LOADING });
  axiosWithAuth()
    .post(`/auth/new`)
    .then((res) => {
      dispatch({ type: POST_OPERATOR_TRUCK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: POST_OPERATOR_TRUCK_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const deleteOperatorTruck = (truckId) => (dispatch) => {
  dispatch({ type: DELETE_OPERATOR_TRUCK_LOADING });
  axiosWithAuth()
    .delete(`/operator/${truckId}`)
    .then((res) => {
      dispatch({ type: DELETE_OPERATOR_TRUCK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_OPERATOR_TRUCK_FAILURE,
        payload: err.response.data.message,
      });
    });
};

//!MENU ITEMS ACTION CREATORS

export const postMenuItem = (item) => (dispatch) => {
  dispatch({ type: POST_MENU_ITEM_LOADING });
  axiosWithAuth()
    .put(`/operator/menu`, item)
    .then((res) => {
      dispatch({ type: POST_MENU_ITEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: POST_MENU_ITEM_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const putMenuItem = (itemId, editedItem) => (dispatch) => {
  dispatch({ type: PUT_MENU_ITEM_LOADING });
  axiosWithAuth()
    .put(`/operator/menu/${itemId}`, editedItem)
    .then((res) => {
      dispatch({ type: PUT_MENU_ITEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: PUT_MENU_ITEM_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const deleteMenuItem = (itemId) => (dispatch) => {
  dispatch({ type: DELETE_MENU_ITEM_LOADING });
  axiosWithAuth()
    .delete(`/operator/menu/${itemId}`)
    .then((res) => {
      dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_MENU_ITEM_FAILURE,
        payload: err.response.data.message,
      });
    });
};

//!CUISINE ACTION CREATORS

export const getCuisines = () => (dispatch) => {
  dispatch({ type: GET_CUISINE_TYPE_LOADING });
  axiosWithAuth()
    .get(`/operator/cuisines`)
    .then((res) => {
      dispatch({ type: GET_CUISINE_TYPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_CUISINE_TYPE_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const postCuisines = (newCuisine) => (dispatch) => {
  dispatch({ type: POST_CUISINE_TYPE_LOADING });
  axiosWithAuth()
    .post(`/operator/cuisines`, newCuisine)
    .then((res) => {
      dispatch({ type: POST_CUISINE_TYPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: POST_CUISINE_TYPE_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const putCuisines = (cuisineTypeID, cuisineTypeName) => (dispatch) => {
  dispatch({ type: PUT_CUISINE_TYPE_LOADING });
  axiosWithAuth()
    .post(`/operator/cuisines/${cuisineTypeID}`, cuisineTypeName)
    .then((res) => {
      dispatch({ type: PUT_CUISINE_TYPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: PUT_CUISINE_TYPE_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const deleteCuisines = (cuisineTypeID) => (dispatch) => {
  dispatch({ type: DELETE_CUISINE_TYPE_LOADING });
  axiosWithAuth()
    .delete(`/operator/cuisines/${cuisineTypeID}`)
    .then((res) => {
      dispatch({ type: DELETE_CUISINE_TYPE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_CUISINE_TYPE_FAILURE,
        payload: err.response.data.message,
      });
    });
};
