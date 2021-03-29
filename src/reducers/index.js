import { combineReducers } from "redux";
import userReducer from "./userReducer";
import truckOperatorReducer from "./truckOperatorReducer";
import truckUserReducer from "./truckUserReducer";

const rootReducer = combineReducers({
  user: userReducer,
  truckUser: truckUserReducer,
  truckOperator: truckOperatorReducer,
});

export default rootReducer;
