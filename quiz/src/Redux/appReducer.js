import {SET_THEME_TYPE} from "./types";

const initialState = {
	loading: true,
	themeDark: false
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_THEME_TYPE:
			return {
				...state,
				themeDark: action.payload
			}
		default:
			return state;
	}
}