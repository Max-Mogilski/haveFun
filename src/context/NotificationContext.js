import { createContext, useReducer } from "react";
import { ACTIONS } from "../actions/notification/Actions";
import { useAuthContext } from "../hooks/auth/useAuthContext";
import { useDocument } from "../hooks/data/useDocument";

export const NotificationContext = createContext();

const notificationReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ERROR:
			return {
				notification: {
					error: true,
					success: false,
					message: action.payload,
				},
			};
		case ACTIONS.SUCCESS:
			return {
				notification: {
					error: false,
					success: true,
					message: action.payload,
				},
			};
		case ACTIONS.CLEAR:
			return { notification: null };
		default:
			return state;
	}
};

export const NotificationContextProvider = ({ children }) => {
	const [state, dispatchNotification] = useReducer(notificationReducer, {
		notification: null,
	});

	if (state.notification) {
		setTimeout(() => {
			dispatchNotification({ type: ACTIONS.CLEAR });
		}, 5000);
	}


	return (
		<NotificationContext.Provider value={{ ...state, dispatchNotification }}>
			{children}
		</NotificationContext.Provider>
	);
};
