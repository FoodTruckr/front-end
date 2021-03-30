import {
  GET_OPERATOR_LOADING,
  GET_OPERATOR_SUCCESS,
  GET_OPERATOR_FAILURE,
  POST_OPERATOR_TRUCK_LOADING,
  POST_OPERATOR_TRUCK_SUCCESS,
  POST_OPERATOR_TRUCK_FAILURE,
  DELETE_OPERATOR_TRUCK_LOADING,
  DELETE_OPERATOR_TRUCK_SUCCESS,
  DELETE_OPERATOR_TRUCK_FAILURE,
  POST_MENU_ITEM_LOADING,
  POST_MENU_ITEM_SUCCESS,
  POST_MENU_ITEM_FAILURE,
  PUT_MENU_ITEM_LOADING,
  PUT_MENU_ITEM_SUCCESS,
  PUT_MENU_ITEM_FAILURE,
  DELETE_MENU_ITEM_LOADING,
  DELETE_MENU_ITEM_SUCCESS,
  DELETE_MENU_ITEM_FAILURE,
  PUT_TRUCK_INFO_LOADING,
  PUT_TRUCK_INFO_SUCCESS,
  PUT_TRUCK_INFO_FAILURE,
  POST_CUISINE_TYPE_LOADING,
  POST_CUISINE_TYPE_SUCCESS,
  POST_CUISINE_TYPE_FAILURE,
  PUT_CUISINE_TYPE_LOADING,
  PUT_CUISINE_TYPE_SUCCESS,
  PUT_CUISINE_TYPE_FAILURE,
  DELETE_CUISINE_TYPE_LOADING,
  DELETE_CUISINE_TYPE_SUCCESS,
  DELETE_CUISINE_TYPE_FAILURE,
} from './../actions/truckOperatorAction';

const initialState = {
  operator: {
    userId: '',
    username: '',
    trucksOwned: [
      {
        truckId: '',
        truckName: '',
      },
    ],
  },
  singleTruck: {
    truckId: '',
    truckName: '',
    currentLocation: '',
    imageOfTruck: '',
    cuisineTypes: [],
    customerRatingAvg: '',
    customerRatings: [{ username: '', starRatings: '' }],
    arrivalTime: '',
    arrivalDate: '',
    departureTime: '',
    departureDate: '',
    menu: [
      {
        itemName: '',
        itemDescription: '',
        itemPrice: '',
        itemPhotoUrl: '',
      },
    ],
  },
};

const truckOperatorReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default truckOperatorReducer;
