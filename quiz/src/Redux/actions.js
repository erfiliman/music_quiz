import {
	LEAVE_THE_GAME,
	SET_GAME_ROOM,
	SET_HOST_GAME,
	SET_JOINED_IN_GAME,
	SET_THEME_TYPE,
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

export const setJoinedInGame = (isJoined) => {
	return {
		type: SET_JOINED_IN_GAME,
		payload: isJoined
	}
}

export const leaveTheGame = () => {
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

export const startGame = (obj) => {
	socket.emit('START_GAME', obj);
}

export const joinGame = (obj) => {
	return async dispatch => {
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


