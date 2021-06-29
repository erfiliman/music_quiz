import {SET_JOINED_IN_GAME} from "./types";

const initialState = {
	isJoined: false,

}

export const gamePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_JOINED_IN_GAME:
			return {
				...state,
				isJoined: action.payload
			}
		default:
			return state
	}
}