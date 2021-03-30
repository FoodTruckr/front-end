import axiosWithAuth from '../utils/axiosWithAuth';

// GET truck operator
export const GET_OPERATOR_LOADING = 'GET_OPERATOR_LOADING';
export const GET_OPERATOR_SUCCESS = 'GET_OPERATOR_SUCCESS';
export const GET_OPERATOR_FAILURE = 'GET_OPERATOR_FAILURE';

// POST operator new truck
export const POST_OPERATOR_TRUCK_LOADING = 'POST_OPERATOR_TRUCK_LOADING';
export const POST_OPERATOR_TRUCK_SUCCESS = 'POST_OPERATOR_TRUCK_SUCCESS';
export const POST_OPERATOR_TRUCK_FAILURE = 'POST_OPERATOR_TRUCK_FAILURE';

// DELETE operator truck
export const DELETE_OPERATOR_TRUCK_LOADING = 'DELETE_OPERATOR_TRUCK_LOADING';
export const DELETE_OPERATOR_TRUCK_SUCCESS = 'DELETE_OPERATOR_TRUCK_SUCCESS';
export const DELETE_OPERATOR_TRUCK_FAILURE = 'DELETE_OPERATOR_TRUCK_FAILURE';

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

// PUT truck info
export const PUT_TRUCK_INFO_LOADING = 'PUT_TRUCK_INFO_LOADING';
export const PUT_TRUCK_INFO_SUCCESS = 'PUT_TRUCK_INFO_SUCCESS';
export const PUT_TRUCK_INFO_FAILURE = 'PUT_TRUCK_INFO_FAILURE';

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

export const getOperator = (operatorId) => (dispatch) => {
  dispatch({ type: GET_OPERATOR_LOADING });
  axiosWithAuth()
    .get(`/operator/${operatorId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putTruckInfo = (operatorId, truckId) => (dispatch) => {
  dispatch({ type: PUT_TRUCK_INFO_LOADING });
  axiosWithAuth()
    .put(`/operator/${operatorId}/${truckId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postOperator = () => (dispatch) => {
  dispatch({ type: POST_OPERATOR_TRUCK_LOADING });
  axiosWithAuth()
    .post(`/auth/new`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCuisines = () => (dispatch) => {
  dispatch({ type: GET_CUISINE_TYPE_LOADING });
  axiosWithAuth()
    .get(`/cuisines`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteOperatorTruck = (operatorId, truckId) => (dispatch) => {
  dispatch({ type: DELETE_OPERATOR_TRUCK_LOADING });
  axiosWithAuth()
    .delete(`/operator/${operatorId}/${truckId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postCuisines = () => (dispatch) => {
  dispatch({ type: POST_CUISINE_TYPE_LOADING });
  axiosWithAuth()
    .post(`/cuisines`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postMenuItem = (operatorId, truckId) => (dispatch) => {
  dispatch({ type: POST_MENU_ITEM_LOADING });
  axiosWithAuth()
    .put(`/operator/${operatorId}/${truckId}`)

    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putCuisines = (cuisineTypeID) => (dispatch) => {
  dispatch({ type: PUT_CUISINE_TYPE_LOADING });
  axiosWithAuth()
    .post(`/cuisines/${cuisineTypeID}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putMenuItem = (operatorId, truckId, itemId) => (dispatch) => {
  dispatch({ type: POST_MENU_ITEM_LOADING });
  axiosWithAuth()
    .put(`/operator/${operatorId}/${truckId}/${itemId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCuisines = (cuisineTypeID) => (dispatch) => {
  dispatch({ type: DELETE_CUISINE_TYPE_LOADING });
  axiosWithAuth()
    .delete(`/cuisines/${cuisineTypeID}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteMenuItem = (operatorId, truckId, itemId) => (dispatch) => {
  dispatch({ type: DELETE_MENU_ITEM_LOADING });
  axiosWithAuth()
    .delete(`/operator/${operatorId}/${truckId}/${itemId}`)

    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
