import React, {useState} from 'react';
import Select from 'react-select'
import {useSelector} from "react-redux";
import CreateGameForm from "./CreateGameForm";
import StartingQuiz from "./StartingQuiz";

const CreateGame = () => {
	const isStart = useSelector((state)=> state.gamePageReducer.isStart);

	return (
		<div className="create-game-container">
			{ !isStart?
				<>
					<CreateGameForm />
					<LeaderBoard/>
				</>
				 : <StartingQuiz/> }
		</div>
	);
};

export default CreateGame;
