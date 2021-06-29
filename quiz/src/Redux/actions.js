import {SET_JOINED_IN_GAME, SET_THEME_TYPE} from "./types";

export const setThemeType = (type) => {
	return {
		type: SET_THEME_TYPE,
		payload: type
	}
}

export const setJoinedInGame = (isJoined) => {
	return {
		type: SET_JOINED_IN_GAME,
		payload: isJoined
	}
}
