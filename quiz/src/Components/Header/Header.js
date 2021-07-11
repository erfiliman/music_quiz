import React from 'react';
import {useSelector} from "react-redux";
import Avatar from 'avataaars'

const Header = () => {
	const username = useSelector(state => state.app.username);
	const avatar = useSelector(state => state.app.avatar);
	return (
		<div className="header">
			<div className="header-logo"></div>
			<div className="header-description">
				<h2>Music Quiz</h2>
			</div>
			<div className="header-user">
				<div className="header-user__avatar">
					<Avatar
						style={{width: '100%', height: '100%'}}
						avatarStyle='Circle'
						topType={avatar.topType}
						accessoriesType={avatar.accessoriesType}
						hairColor={avatar.hairColor}
						facialHairType={avatar.facialHairType}
						clotheType={avatar.clotheType}
						clotheColor={avatar.clotheColor}
						eyeType={avatar.eyeType}
						eyebrowType={avatar.eyebrowType}
						mouthType={avatar.mouthType}
						skinColor={avatar.skinColor}
					/>
				</div>
				<div className="header-user__name">
					<span>{username}</span>
				</div>
				<div className="header-settings">

				</div>
			</div>
		</div>
	);
};

export default Header;
