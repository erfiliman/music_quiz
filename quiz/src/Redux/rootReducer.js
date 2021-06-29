import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {navReducer} from "./navReducer";
import {gamePageReducer} from "./gamePageReducer";

export const rootReducer = combineReducers({
	app: appReducer,
	navReducer: navReducer,
	gamePageReducer: gamePageReducer
})