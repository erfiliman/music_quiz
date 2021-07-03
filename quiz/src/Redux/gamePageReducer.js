import {SET_GAME_ROOM, SET_HOST_GAME, SET_JOINED_IN_GAME, SET_START_GAME} from "./types";

const initialState = {
	isJoined: false,
	roomId: null,
	isHost: false,
	isStart: false,
}

export const gamePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_JOINED_IN_GAME:
			return {
				...state,
				isJoined: action.payload
			}
		case SET_GAME_ROOM:
			return {
				...state,
				roomId: action.payload
			}
		case SET_HOST_GAME:
			return {
				...state,
				isHost: action.payload
			}
		case SET_START_GAME:
			return {
				...state,
				isStart: action.payload
			}
		default:
			return state;
	}
}