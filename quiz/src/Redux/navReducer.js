import {SET_ACTIVE_MENU_ITEM} from "./types";

const initialState = {
	menuItems: [
		{
			id: 0,
			name: "Home",
			nameRu: "Домой",
			cssClass: "menu-item_home",
			link: '',
		},
		{
			id: 1,
			name: "Play",
			nameRu: "Играть",
			cssClass: "menu-item_play",
			link: 'play',
		},
		{
			id: 2,
			name: "Settings",
			nameRu: "Настройки",
			cssClass: "menu-item_settings",
			link: 'settings',
		},
	],
}

export const navReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_MENU_ITEM:
			return {
				...state.menuItems.slice(0,0),
				...action.payload
			}
		default:
			return state;
	}
}