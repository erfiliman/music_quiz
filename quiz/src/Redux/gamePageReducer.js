import {
	LEAVE_THE_GAME,
	SET_GAME_ROOM,
	SET_HOST_GAME,
	SET_JOINED_IN_GAME,
	SET_START_GAME,
	SET_USERS_GAME
} from "./types";

const initialState = {
	isJoined: false,
	roomId: localStorage.getItem('roomId')==undefined? null: localStorage.getItem('roomId'),
	isHost: false,
	isStart: false,
	users: [],
}

export const gamePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_JOINED_IN_GAME:
			return {
				...state,
				isJoined: action.payload
			}
		case LEAVE_THE_GAME:
			localStorage.removeItem('roomId')
			return {
				...state,
				isHost: false,
				roomId: null,
				isStart: false,
				users: [],
				isJoined: false,
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
		case SET_USERS_GAME:
			return {
				...state,
				users: [...state.users.slice(0,0), ...action.payload]
			}
		default:
			return state;
	}
}