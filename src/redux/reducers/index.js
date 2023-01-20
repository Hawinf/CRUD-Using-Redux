import { combineReducers } from "redux";
import regisReducer from "./regisReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
    regisReducer, loginReducer
})

export default rootReducer;