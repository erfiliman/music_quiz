import {SET_GAME_ROOM, SET_HOST_GAME, SET_JOINED_IN_GAME, SET_THEME_TYPE} from "./types";
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

export const setGameRoom = (roomId) => {
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

export const setStartGame = () => {
	return async dispatch => {

	}
}

export const joinGame = (obj) => {
	return async dispatch => {
		let res = await axios.post('http://localhost:8000/join', obj);
		console.log(res);
		dispatch(setJoinedInGame(true));
		dispatch(setGameRoom(res.data.roomId));
		obj.roomId = res.data.roomId;
		console.log(obj);
		socket.emit('JOIN', obj);
	}
}


