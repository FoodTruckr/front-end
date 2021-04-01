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
  GET_CUISINE_TYPE_LOADING,
  GET_CUISINE_TYPE_SUCCESS,
  GET_CUISINE_TYPE_FAILURE,
  GET_MENU_ITEM_LOADING,
  GET_MENU_ITEM_SUCCESS,
  GET_MENU_ITEM_FAILURE,
  GET_OPERATOR_SINGLE_TRUCK_LOADING,
  GET_OPERATOR_SINGLE_TRUCK_SUCCESS,
  GET_OPERATOR_SINGLE_TRUCK_FAILURE,
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
  allCuisineTypes: [],
  isLoading: false,
  errors: '',
};

const truckOperatorReducer = (state = initialState, action) => {
  switch (action.type) {
    //! GET OPERATOR CASES
    case GET_OPERATOR_LOADING:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };
    case GET_OPERATOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        operator: {
          ...state.operator,
          trucksOwned: action.payload,
        },
      };
    case GET_OPERATOR_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    //! GET SINGLE OPERATOR TRUCK CASES
    case GET_OPERATOR_SINGLE_TRUCK_LOADING:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };
    case GET_OPERATOR_SINGLE_TRUCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        singleTruck: action.payload,
      };
    case GET_OPERATOR_SINGLE_TRUCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    //! POST OPERATOR TRUCK CASES
    case POST_OPERATOR_TRUCK_LOADING:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };
    case POST_OPERATOR_TRUCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        operator: {
          ...state.operator,
          trucksOwned: action.payload,
        },
      };
    case POST_OPERATOR_TRUCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    //! PUT TRUCK CASES
    case PUT_TRUCK_INFO_LOADING:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };
    case PUT_TRUCK_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        //TODO MISSING SUCCESS CASE
      };
    case PUT_TRUCK_INFO_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    //! DELETE OPERATOR TRUCK CASES
    case DELETE_OPERATOR_TRUCK_LOADING:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };
    case DELETE_OPERATOR_TRUCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        operator: {
          ...state.operator,
          trucksOwned: action.payload,
        },
      };
    case DELETE_OPERATOR_TRUCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    // //! GET MENU ITEM CASES TALK TO JAY ABOUT THIS
    // case GET_MENU_ITEM_LOADING:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     errors: '',
    //   };
    // case GET_MENU_ITEM_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,

    //   };
    // case GET_MENU_ITEM_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errors: action.payload,
    //   };
    // //! POST MENU ITEM CASES
    // case POST_MENU_ITEM_LOADING:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     errors: '',
    //   };
    // case POST_MENU_ITEM_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     //TODO MISSING SUCCESS CASE
    //   };
    // case POST_MENU_ITEM_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errors: action.payload,
    //   };
    // //! PUT MENU ITEM CASES
    // case PUT_MENU_ITEM_LOADING:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     errors: '',
    //   };
    // case PUT_MENU_ITEM_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     //TODO MISSING SUCCESS CASE
    //   };
    // case PUT_MENU_ITEM_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errors: action.payload,
    //   };
    // //!DELETE MENU ITEM CASES
    // case DELETE_MENU_ITEM_LOADING:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     errors: '',
    //   };
    // case DELETE_MENU_ITEM_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     //TODO MISSING SUCCESS CASE
    //   };
    // case DELETE_MENU_ITEM_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errors: action.payload,
    //   };
    //!POST CUISINE CASES
    case POST_CUISINE_TYPE_LOADING:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };
    case POST_CUISINE_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCuisineTypes: action.payload,
      };
    case POST_CUISINE_TYPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    //! PUT CUISINE CASES
    case PUT_CUISINE_TYPE_LOADING:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };

    case PUT_CUISINE_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCuisineTypes: action.payload,
      };
    case PUT_CUISINE_TYPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    //!DELETE CUISINE CASES
    case DELETE_CUISINE_TYPE_LOADING:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };
    case DELETE_CUISINE_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCuisineTypes: action.payload,
      };
    case DELETE_CUISINE_TYPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    //! GET CUISINE CASES
    case GET_CUISINE_TYPE_LOADING:
      return {
        ...state,
        isLoading: true,
        errors: '',
      };
    case GET_CUISINE_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCuisineTypes: action.payload,
      };
    case GET_CUISINE_TYPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default truckOperatorReducer;
