import { combineReducers } from "redux";
import userReducer from "./userReducer";
import truckOperatorReducer from "./truckOperatorReducer";
import truckDinerReducer from "./truckDinerReducer";

const rootReducer = combineReducers({
  user: userReducer,
  truckDiner: truckDinerReducer,
  truckOperator: truckOperatorReducer,
});

export default rootReducer;
