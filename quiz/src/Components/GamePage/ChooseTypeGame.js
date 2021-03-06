import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {joinGame, setHostGame} from "../../Redux/actions";

const ChooseTypeGame = () => {
	const dispatch = useDispatch();
	const username = useSelector(state => state.app.username);

	function handleClick() {
		dispatch(joinGame({ username: username}));
		dispatch(setHostGame(true));
	}


	return (
		<div className="game-container">
			<h1 className="game-page-title">Music Quiz is awesome. Let`s go to check your music knowledge</h1>
			<div className="game-choose-type-container">
				<div className="game-type game-type_single">
					<div className="game-type__wrapper">
						<div className="game-type__title">Single game with users</div>
						<div className="game-type__button button">New game</div>
					</div>
				</div>
				<div className="game-type game-type_create">
					<div className="game-type__wrapper">
						<div className="game-type__title">Create a game room to play with your friends</div>
						<div className="game-type__button button" onClick={handleClick}>Create room</div>
					</div>
				</div>
				<div className="game-type game-type_join">
					<div className="game-type__wrapper">
						<div className="game-type__title">Join to game room</div>
						<div className="game-type__button button">Join</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseTypeGame;
