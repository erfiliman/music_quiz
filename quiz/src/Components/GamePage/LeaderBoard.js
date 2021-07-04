import React from 'react';
import {useSelector} from "react-redux";

const LeaderBoard = () => {
	const users = useSelector((state)=> state.gamePageReducer.users)
	return (
		<div className="leader-board">
			<h2 className="title-1">Leader board</h2>
			{users.map((item, index) => <div key={index + "-leader-board__item"} className="leader-board__item">
				{item.username}
			</div>)}
		</div>
	);
};

export default LeaderBoard;
