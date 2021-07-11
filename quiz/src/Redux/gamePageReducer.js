import {
	LEAVE_THE_GAME, SET_ANSWERED, SET_ANSWERS_GAME,
	SET_GAME_ROOM,
	SET_HOST_GAME,
	SET_JOINED_IN_GAME, SET_LOADING_GAME, SET_QUESTION_GAME, SET_SHOW_RESULT,
	SET_START_GAME, SET_TIME_GAME,
	SET_USERS_GAME
} from "./types";
import {act} from "@testing-library/react";

const initialState = {
	isJoined: false,
	roomId: localStorage.getItem('roomId')==undefined? null: localStorage.getItem('roomId'),
	isHost: false,
	isStart: false,
	time: 0,
	currentQuestion: "",
	currentAnswers: [],
	users: [],
	isLoading: false,
	answered: false,
	showResult: false,
}

export const gamePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_JOINED_IN_GAME:
			return {
				...state,
				isJoined: action.payload
			}
		case SET_LOADING_GAME:
			return {
				...state,
				isLoading: action.payload
			}
		case SET_SHOW_RESULT:
			return {
				...state,
				showResult: action.payload
			}
		case SET_ANSWERED:
			return {
				...state,
				answered: action.payload
			}
		case LEAVE_THE_GAME:
			localStorage.removeItem('roomId')
			return {
				...state,
				isHost: false,
				roomId: null,
				isStart: false,
				currentQuestion: "",
				users: [],
				time: 0,
				isJoined: false,
				answered: false,
				isLoading: false,
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
		case SET_TIME_GAME:
			return {
				...state,
				time: action.payload
			}
		case SET_USERS_GAME:
			return {
				...state,
				users: [...state.users.slice(0,0), ...action.payload]
			}
		case SET_QUESTION_GAME:
			return {
				...state,
				currentQuestion: action.payload
			}
		case SET_ANSWERS_GAME:
			return {
				...state,
				currentAnswers: [...state.users.slice(0,0), ...action.payload]
			}
		default:
			return state;
	}
}