import { createContext, useReducer } from "react";
import { ACTIONS } from "../actions/notification/Actions";
import { useUserDataContext } from "../hooks/data/useUserDataContext";

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
	const { document } = useUserDataContext();

	const notificationReducer = (state, action) => {
		switch (action.type) {
			case ACTIONS.ERROR:
				return {
					notification: {
						error: true,
						success: false,
						message: action.payload,
						show: document && document.notifications,
					},
				};
			case ACTIONS.SUCCESS:
				return {
					notification: {
						error: false,
						success: true,
						message: action.payload,
						show: document && document.notifications,
					},
				};
			case ACTIONS.CLEAR:
				return { notification: null };
			default:
				return state;
		}
	};

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
