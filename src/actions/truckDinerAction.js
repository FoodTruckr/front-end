import axiosWithAuth from '../utils/axiosWithAuth';

//!DINER INFO

// GET diner info
export const GET_DINER_SUCCESS = 'GET_DINER_SUCCESS';
export const GET_DINER_FAILURE = 'GET_DINER_FAILURE';
export const GET_DINER_LOADING = 'GET_DINER_LOADING';

//! DINER TRUCK ACTION TYPES

// GET single truck
export const GET_DINER_SINGLE_TRUCK_SUCCESS = 'GET_DINER_SINGLE_TRUCK_SUCCESS';
export const GET_DINER_SINGLE_TRUCK_FAILURE = 'GET_DINER_SINGLE_TRUCK_FAILURE';
export const GET_DINER_SINGLE_TRUCK_LOADING = 'GET_DINER_SINGLE_TRUCK_LOADING';

// GET all the trucks
export const GET_DINER_ALL_TRUCK_SUCCESS = 'GET_DINER_ALL_TRUCK_SUCCESS';
export const GET_DINER_ALL_TRUCK_FAILURE = 'GET_DINER_ALL_TRUCK_FAILURE';
export const GET_DINER_ALL_TRUCK_LOADING = 'GET_DINER_ALL_TRUCK_LOADING';

//! FAVORITE TRUCK ACTION TYPES

// POST favorite truck
export const POST_FAVORITE_SUCCESS = 'POST_FAVORITE_SUCCESS';
export const POST_FAVORITE_FAILURE = 'POST_FAVORITE_FAILURE';
export const POST_FAVORITE_LOADING = 'POST_FAVORITE_LOADING';

// DELETE favorite truck
export const DELETE_FAVORITE_SUCCESS = 'DELETE_FAVORITE_SUCCESS';
export const DELETE_FAVORITE_FAILURE = 'DELETE_FAVORITE_FAILURE';
export const DELETE_FAVORITE_LOADING = 'DELETE_FAVORITE_LOADING';

//OPEN Favorite Bar
export const TOGGLE_FAVORITE_BAR = 'TOGGLE_FAVORITE_BAR';

//!RATING ACTION TYPES

// POST customer rating
export const POST_RATING_SUCCESS = 'POST_RATING_SUCCESS';
export const POST_RATING_FAILURE = 'POST_RATING_FAILURE';
export const POST_RATING_LOADING = 'POST_RATING_LOADING';

// PUT rating
export const PUT_RATING_LOADING = 'PUT_RATING_LOADING';
export const PUT_RATING_SUCCESS = 'PUT_RATING_SUCCESS';
export const PUT_RATING_FAILURE = 'PUT_RATING_FAILURE';

// DELETE rating
export const DELETE_RATING_LOADING = 'DELETE_RATING_LOADING';
export const DELETE_RATING_SUCCESS = 'DELETE_RATING_SUCCESS';
export const DELETE_RATING_FAILURE = 'DELETE_RATING_FAILURE';

//!CUISINE ACTION TYPES

// GET cuisineTypes
export const GET_CUISINE_TYPE_LOADING = 'GET_CUISINE_TYPES_LOADING';
export const GET_CUISINE_TYPE_SUCCESS = 'GET_CUISINE_TYPES_SUCCESS';
export const GET_CUISINE_TYPE_FAILURE = 'GET_CUISINE_TYPES_FAILURE';

export const getDiner = () => (dispatch) => {
  dispatch({ type: GET_DINER_LOADING });
  axiosWithAuth()
    .get(`/diner`)
    .then((res) => {
      dispatch({ type: GET_DINER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_DINER_FAILURE, payload: err.response.data.message });
    });
};

export const getSingleTruckDiner = (truckId) => (dispatch) => {
  dispatch({ type: GET_DINER_SINGLE_TRUCK_LOADING });
  axiosWithAuth()
    .get(`/trucks/${truckId}`)
    .then((res) => {
      dispatch({ type: GET_DINER_SINGLE_TRUCK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_DINER_SINGLE_TRUCK_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const getTrucksDiner = () => (dispatch) => {
  dispatch({ type: GET_DINER_ALL_TRUCK_LOADING });
  axiosWithAuth()
    .get('/trucks')
    .then((res) => {
      dispatch({ type: GET_DINER_ALL_TRUCK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_DINER_ALL_TRUCK_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const postFavoriteTruck = (truckId) => (dispatch) => {
  dispatch({ type: POST_FAVORITE_LOADING });
  axiosWithAuth()
    .post(`/diner/favorites`, { truckId: truckId })
    .then((res) => {
      dispatch({
        type: POST_FAVORITE_SUCCESS,
        payload: res.data.favoriteTrucks,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_FAVORITE_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const deleteFavoriteTruck = (truckId) => (dispatch) => {
  dispatch({ type: DELETE_FAVORITE_LOADING });
  axiosWithAuth()
    .delete(`/diner/favorites`, { data: { truckId: truckId } })
    .then((res) => {
      dispatch({
        type: DELETE_FAVORITE_SUCCESS,
        payload: res.data.favoriteTrucks,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_FAVORITE_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const postDinerRating = (truckId, rating) => (dispatch) => {
  dispatch({ type: POST_RATING_LOADING });
  axiosWithAuth()
    .post(`/diner/${truckId}/ratings`, {
      truckId: truckId,
      rating: rating,
    })
    .then((res) => {
      dispatch({ type: POST_RATING_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: POST_RATING_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const putDinerRating = (truckId, rating) => (dispatch) => {
  dispatch({ type: PUT_RATING_LOADING });
  axiosWithAuth()
    .post(`/diner/${truckId}/ratings`, { truckId, rating })
    .then((res) => {
      dispatch({ type: PUT_RATING_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        Type: PUT_RATING_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const deleteDinerRating = (truckId) => (dispatch) => {
  dispatch({ type: DELETE_RATING_LOADING });
  axiosWithAuth()
    .post(`/diner/${truckId}/ratings`)
    .then((res) => {
      dispatch({ type: DELETE_RATING_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_RATING_FAILURE,
        payload: err.response.data.message,
      });
    });
};

export const getDinerCuisineTypes = () => (dispatch) => {
  dispatch({ type: GET_CUISINE_TYPE_LOADING });
  axiosWithAuth()
    .get('/cuisines')
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

export const toggleFavoriteBar = () => {
  return { type: TOGGLE_FAVORITE_BAR };
};
