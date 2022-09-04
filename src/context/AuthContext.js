import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import { ACTIONS } from "../actions/auth/Actions";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

const authReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.SIGNUP:
			return { ...state, user: action.payload };
		case ACTIONS.SIGNIN:
			return { ...state, user: action.payload };
		case ACTIONS.LOGOUT:
			return { ...state, user: null };
		case ACTIONS.AUTHISREADY:
			return { user: action.payload, authIsReady: true };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false,
	});

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			dispatch({ type: ACTIONS.AUTHISREADY, payload: user });
		});
		unsub();
	}, []);

	console.log("Authcontext: ", state);
	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
