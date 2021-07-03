import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
	const username = useSelector(state => state.app.username)
	return (
		<div className="header">
			<div className="heaedr-logo"></div>
			<div className="header-description">
				<h2>Music Quiz</h2>
			</div>
			<div className="header-user">
				<div className="header-user__avatar"></div>
				<div className="header-user__name">
					<span>{username}</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
