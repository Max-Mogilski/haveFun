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
					show: state.show ? state.show : true,
				},
			};
		case ACTIONS.SUCCESS:
			return {
				notification: {
					error: false,
					success: true,
					message: action.payload,
					show: state.show ? state.show : true,
				},
			};
		case ACTIONS.CLEAR:
			return { notification: null };
		case ACTIONS.NOTIFICATION_OFF:
			return {
				notification: {
					...state.notification,
					show: false,
				},
			};
		case ACTIONS.NOTIFICATION_ON:
			return {
				notification: {
					...state.notification,
					show: true,
				},
			};
		default:
			return state;
	}
};

export const NotificationContextProvider = ({ children }) => {
	const [state, dispatchNotification] = useReducer(notificationReducer, {
		notification: null,
	});

	console.log(state);

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
