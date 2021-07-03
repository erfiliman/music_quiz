import React from 'react';
import {Link, NavLink} from "react-router-dom";

const MenuItem = ({ exact,nameItem, cssClass, slug }) => {
	return (
		<NavLink exact={exact} activeClassName="menu-item_active" to={`/${slug}`} className={`menu-item ${cssClass}`}>
			<div className="menu-item__circle-top"/>
				<div className="menu-item__title">
					{nameItem}
				</div>
			<div className="menu-item__circle-bottom"/>
		</NavLink>
	);
};

export default MenuItem;
