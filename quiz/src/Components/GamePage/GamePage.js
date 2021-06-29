import React from 'react';
import {useSelector} from "react-redux";
import ChooseTypeGame from "./ChooseTypeGame";

const GamePage = () => {

	const isJoined = useSelector((state)=>{
		return state.gamePageReducer.isJoined;
	})

	return (
		<>
		{
			!isJoined? <ChooseTypeGame/> : <></>
		}
		</>
	);
};

export default GamePage;
