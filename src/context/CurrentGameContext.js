import { createContext, useReducer } from "react";
import { ACTIONS } from "../actions/game/Actions";

export const CurrentGameContext = createContext();

const gameReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.UPDATE_GAME:
			return {
				...state,
				statistics: {
					multiplier: action.payload.multiplier,
					bet: action.payload.price,
					win: action.payload.win,
				},
				price: action.payload.price,
				gameItems: action.payload.gameItems,
			};
		case ACTIONS.SET_PRICE:
			return {
				...state,
				price: action.payload.price,
			};
		case ACTIONS.CLEAR_GAME:
			return {
				showResult: false,
				statistics: {
					multiplier: 0,
					bet: 0,
					win: 0,
				},
				price: 0,
				gameItems: [],
			};
		case ACTIONS.SET_SHOW_RESULT:
			return {
				...state,
				showResult: action.payload,
			};
		default:
			return;
	}
};

export const CurrentGameContextProvider = ({ children }) => {
	const [state, dispatchGame] = useReducer(gameReducer, {
		showResult: false,
		statistics: {
			multiplier: 0,
			bet: 0,
			win: 0,
		},
		price: 0,
		gameItems: [],
	});
	return (
		<CurrentGameContext.Provider value={{ ...state, dispatchGame }}>
			{children}
		</CurrentGameContext.Provider>
	);
};
