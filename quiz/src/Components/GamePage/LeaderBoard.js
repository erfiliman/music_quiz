import React from 'react';
import {useSelector} from "react-redux";

const LeaderBoard = () => {
	const users = useSelector((state => state.gamePageReducer.users.sort((a,b)=>{
		if (a.points > b.points) {
			return -1;
		}
		if (a.points < b.points) {
			return 1;
		}
		return 0;
	})));
	return (
		<div className="leader-board">
			<h2 className="title-1">Leader board</h2>
			{users.map((item, index) => <div key={index + "-leader-board__item"} className="leader-board__item">
				<div className="leader-board-name">{item.username}</div>
				<div className="leader-board-points">{item.points}</div>


			</div>)}
		</div>
	);
};

export default LeaderBoard;
