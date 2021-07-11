import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ChooseTypeGame from "./ChooseTypeGame";
import {Route, useHistory} from "react-router-dom";
import CreateGame from "./CreateGame";
import socket from "../../sockets";
import {
	setAnswered,
	setAnswersGame,
	setQuestionGame, setShowResult,
	setStartGame,
	setTimeGame,
	setUsersGame
} from "../../Redux/actions";

const GamePage = () => {
	const roomId = useSelector((state)=> state.gamePageReducer.roomId);
	const history = useHistory();
	const dispatch = useDispatch();
	const isJoined = useSelector((state)=>{
		return state.gamePageReducer.isJoined;
	})

	useEffect(()=>{
		if (roomId)
			history.push("/play/room/" + roomId);
	},[roomId])

	useEffect(()=>{
		socket.on('ADD_USER', (users)=> {
			dispatch(setUsersGame(users))
		});
		socket.on('START_GAME', ()=> {
			dispatch(setStartGame(true))
		});
		socket.on('SECONDS', (time)=> {
			dispatch(setTimeGame(time))
		});
		socket.on('NEW_QUESTION', (obj)=> {
			dispatch(setAnswered(false));
			dispatch(setShowResult(false));
			dispatch(setQuestionGame(obj.question));
			dispatch(setAnswersGame(obj.answers));
		});
		socket.on('RESULT_QUESTION', (users)=> {
			dispatch(setUsersGame(users));
			dispatch(setShowResult(true));
		});

	},[])

	return (
		<>
		<Route path="/play/room/:roomId">
			<CreateGame/>
		</Route>
		<Route path="/play" exact={true}>
			<ChooseTypeGame/>
		</Route>
		</>
	);
};

export default GamePage;
