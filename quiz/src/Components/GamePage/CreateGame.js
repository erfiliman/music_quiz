import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import CreateGameForm from "./CreateGameForm";
import StartingQuiz from "./StartingQuiz";
import LeaderBoard from "./LeaderBoard";
import {joinGame, joinRoomById} from "../../Redux/actions";

const CreateGame = () => {
	const isStart = useSelector((state)=> state.gamePageReducer.isStart);
	const username = useSelector(state => state.app.username)
	const dispatch = useDispatch();
	let { roomId } = useParams();

	useEffect(()=>{
		dispatch(joinGame({roomId, username}))
	},[])


	return (
		<div className="create-game-container">
			{ !isStart?
				<>
					<LeaveGame/>
					<CreateGameForm />
					<LeaderBoard/>
				</>
				 : <StartingQuiz/> }
		</div>
	);
};

export default CreateGame;
