import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import ChooseTypeGame from "./ChooseTypeGame";
import {Route, useHistory} from "react-router-dom";
import CreateGame from "./CreateGame";

const GamePage = () => {
	const roomId = useSelector((state)=> state.gamePageReducer.roomId);
	const history = useHistory();
	const isJoined = useSelector((state)=>{
		return state.gamePageReducer.isJoined;
	})

	useEffect(()=>{
		if (roomId)
			history.push("/play/room/" + roomId);
	},[roomId])

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
