import {
	LEAVE_THE_GAME, SET_ANSWERED, SET_ANSWERS_GAME,
	SET_GAME_ROOM,
	SET_HOST_GAME,
	SET_JOINED_IN_GAME, SET_LOADING_GAME, SET_QUESTION_GAME, SET_SHOW_RESULT, SET_START_GAME,
	SET_THEME_TYPE, SET_TIME_GAME,
	SET_USERS_GAME
} from "./types";
import axios from 'axios';
import socket from "../sockets";

export const setThemeType = (type) => {
	return {
		type: SET_THEME_TYPE,
		payload: type
	}
}

export const setTimeGame = (time) => {
	return {
		type: SET_TIME_GAME,
		payload: time
	}
}

export const setJoinedInGame = (isJoined) => {
	return {
		type: SET_JOINED_IN_GAME,
		payload: isJoined
	}
}

export const leaveTheGame = (roomId) => {
	socket.emit('LEAVE_THE_GAME', { roomId: roomId, sessionID: localStorage.getItem("sid") });
	return {
		type: LEAVE_THE_GAME
	}
}

export const setGameRoom = (roomId) => {
	localStorage.setItem('roomId', roomId);
	return {
		type: SET_GAME_ROOM,
		payload: roomId
	}
}

export const setHostGame = (isHost) => {
	return {
		type: SET_HOST_GAME,
		payload: isHost
	}
}

export const setUsersGame = (users) => {
	return {
		type: SET_USERS_GAME,
		payload: users
	}
}

export const setStartGame = (isStart) => {
	return {
		type: SET_START_GAME,
		payload: isStart
	}
}

export const setAnswered = (answered) => {
	return {
		type: SET_ANSWERED,
		payload: answered
	}
}

export const setShowResult = (showResult) => {
	return {
		type: SET_SHOW_RESULT,
		payload: showResult
	}
}

export const checkAnswer = (answer, time) => {
	return async dispatch => {
		dispatch(setAnswered(true));
		answer.time = time;
		answer.sessionID = localStorage.getItem("sid");
		socket.emit('CHECK_ANSWER', answer);
	}
}

export const startGame = (obj) => {
	return async dispatch => {
		socket.emit('START_GAME', obj);
	}
}

export const setQuestionGame = (obj) => {
	return {
		type: SET_QUESTION_GAME,
		payload: obj
	}
}

export const setAnswersGame = (obj) => {
	return {
		type: SET_ANSWERS_GAME,
		payload: obj
	}
}

export const setLoadingGame = (isLoading) => {
	return {
		type: SET_LOADING_GAME,
		payload: isLoading
	}
}

export const joinGame = (obj) => {
	return async dispatch => {
		dispatch(setLoadingGame(true));
		let res;
		if (localStorage.getItem("sid")==undefined) {
			res = await axios.post('http://localhost:8000/join', obj);
			localStorage.setItem('sid', res.data.sessionID);
		}
		else {
			obj.sessionID = localStorage.getItem("sid")
			res = await axios.post('http://localhost:8000/join', obj);
		}
		dispatch(setJoinedInGame(true));
		dispatch(setHostGame(res.data.isHost));
		dispatch(setGameRoom(res.data.roomId));
		obj.roomId = res.data.roomId;
		obj.sessionID = localStorage.getItem("sid");
		socket.emit('JOIN', obj);
		dispatch(setLoadingGame(false));
	}
}

// export const joinRoomById = (roomId, username) => {
// 	return async dispatch => {
// 		let obj = {roomId: roomId, username: username};
// 		let res = await axios.post('http://localhost:8000/join', obj);
// 		socket.emit('JOIN', obj);
// 		dispatch(setJoinedInGame(true));
// 		dispatch(setGameRoom(roomId));
// 	}
// }


