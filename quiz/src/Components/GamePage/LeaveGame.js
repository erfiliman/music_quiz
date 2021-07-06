import React from 'react';
import {useDispatch} from "react-redux";
import {leaveTheGame} from "../../Redux/actions";
import {useHistory} from "react-router-dom";

const LeaveGame = () => {
	const dispatch = useDispatch()
	const history = useHistory();
	const onClickHandler = () => {
		dispatch(leaveTheGame())
		history.push("/play");
	}
	return (
		<div className="button button_red button_leave-game" onClick={onClickHandler}>
			Leave
		</div>
	);
};

export default LeaveGame;
