import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {navReducer} from "./navReducer";

export const rootReducer = combineReducers({
	app: appReducer,
	navReducer: navReducer
})