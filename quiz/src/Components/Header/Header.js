import React from 'react';

const Header = () => {
	return (
		<div className="header">
			<div className="heaedr-logo"></div>
			<div className="header-description">
				<h2>Music Quiz</h2>
			</div>
			<div className="header-user">
				<div className="header-user__avatar"></div>
				<div className="header-user__name">
					<span>Leonid S.Chirkov</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
