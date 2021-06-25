import {SET_THEME_TYPE} from "./types";

export const setThemeType = (type) => {
	return {
		type: SET_THEME_TYPE,
		action: type
	}
}
