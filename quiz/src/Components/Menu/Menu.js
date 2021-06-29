import React from 'react';
import {useSelector} from "react-redux";
import MenuItem from "./MenuItem";

const Menu = () => {
	const links = useSelector((state)=>{
		return state.navReducer.menuItems;
	})

	return (
		<div className="navigation-menu">
			{
				links.map((item, index)=>{
					return (
						<MenuItem cssClass={item.cssClass} nameItem={item.name} slug={item.link} key={`${item.name+index}`}/>
					)
				})
			}
		</div>
	);
};

export default Menu;
