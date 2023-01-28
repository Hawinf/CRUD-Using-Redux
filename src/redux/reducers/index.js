import { combineReducers } from "redux";
import regisReducer from "./regisReducer";
import loginReducer from "./loginReducer";
import carReducers from './carReducers';

const rootReducer = combineReducers({
    regisReducer, loginReducer, carReducers
})

export default rootReducer;