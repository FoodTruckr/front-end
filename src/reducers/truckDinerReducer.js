import {
  GET_DINER_SUCCESS,
  GET_DINER_FAILURE,
  GET_DINER_LOADING,
  GET_DINER_SINGLE_TRUCK_SUCCESS,
  GET_DINER_SINGLE_TRUCK_FAILURE,
  GET_DINER_SINGLE_TRUCK_LOADING,
  GET_DINER_ALL_TRUCK_SUCCESS,
  GET_DINER_ALL_TRUCK_FAILURE,
  GET_DINER_ALL_TRUCK_LOADING,
  POST_FAVORITE_SUCCESS,
  POST_FAVORITE_FAILURE,
  POST_FAVORITE_LOADING,
  DELETE_FAVORITE_SUCCESS,
  DELETE_FAVORITE_FAILURE,
  DELETE_FAVORITE_LOADING,
  POST_RATING_SUCCESS,
  POST_RATING_FAILURE,
  POST_RATING_LOADING,
  PUT_RATING_LOADING,
  PUT_RATING_SUCCESS,
  PUT_RATING_FAILURE,
  DELETE_RATING_LOADING,
  DELETE_RATING_SUCCESS,
  DELETE_RATING_FAILURE,
  GET_CUISINE_TYPE_LOADING,
  GET_CUISINE_TYPE_SUCCESS,
  GET_CUISINE_TYPE_FAILURE,
} from '../actions/truckDinerAction';

const initialState = {
  diner: {
    userId: '',
    username: '',
    favoriteTrucks: [
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
    cuisineTypes: [
      {
        cuisineTypeName: '',
        cuisineTypeId: '',
      },
    ],
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

  trucks: [
    {
      truckId: '',
      truckName: '',
      imageOfTruck: '',
      customerRatingAvg: '',
      cuisineTypes: [
        {
          cuisineTypeId: '',
          cuisineTypeName: '',
        },
      ],
    },
  ],
  isLoading: false,
  errors: '',
};

const truckDinerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DINER_LOADING:
      return {
        ...state,
      };
    case GET_DINER_SUCCESS:
      return {
        ...state,
      };
    case GET_DINER_FAILURE:
      return {
        ...state,
      };
    case GET_DINER_SINGLE_TRUCK_LOADING:
      return {
        ...state,
      };
    case GET_DINER_SINGLE_TRUCK_SUCCESS:
      return {
        ...state,
      };
    case GET_DINER_SINGLE_TRUCK_FAILURE:
      return {
        ...state,
      };
    case GET_DINER_ALL_TRUCK_LOADING:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };
    case GET_DINER_ALL_TRUCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trucks: action.payload,
      };
    case GET_DINER_ALL_TRUCK_FAILURE:
      return {
        ...state,
      };
    case POST_FAVORITE_LOADING:
      return {
        ...state,
      };
    case POST_FAVORITE_SUCCESS:
      return {
        ...state,
      };
    case POST_FAVORITE_FAILURE:
      return {
        ...state,
      };
    case DELETE_FAVORITE_LOADING:
      return {
        ...state,
      };
    case DELETE_FAVORITE_SUCCESS:
      return {
        ...state,
      };
    case DELETE_FAVORITE_FAILURE:
      return {
        ...state,
      };
    case POST_RATING_LOADING:
      return {
        ...state,
      };
    case POST_RATING_SUCCESS:
      return {
        ...state,
      };
    case POST_RATING_FAILURE:
      return {
        ...state,
      };
    case PUT_RATING_LOADING:
      return {
        ...state,
      };
    case PUT_RATING_SUCCESS:
      return {
        ...state,
      };
    case PUT_RATING_FAILURE:
      return {
        ...state,
      };
    case DELETE_RATING_LOADING:
      return {
        ...state,
      };
    case DELETE_RATING_SUCCESS:
      return {
        ...state,
      };
    case DELETE_RATING_FAILURE:
      return {
        ...state,
      };
    case GET_CUISINE_TYPE_LOADING:
      return {
        ...state,
      };
    case GET_CUISINE_TYPE_SUCCESS:
      return {
        ...state,
      };
    case GET_CUISINE_TYPE_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default truckDinerReducer;
