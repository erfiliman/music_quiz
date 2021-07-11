import {SET_THEME_TYPE} from "./types";
import {getName} from "../uniqueName";
import generateAvatar from "../generateAvatar";

const initialState = {
	loading: true,
	avatar: localStorage.getItem("avatar")==undefined? generateAvatar(): JSON.parse(localStorage.getItem("avatar")),
	themeDark: false,
	username: localStorage.getItem('username') == undefined ? getName() :localStorage.getItem('username')
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