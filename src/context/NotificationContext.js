import { createContext, useReducer, useState } from "react";
import { ACTIONS } from "../actions/notification/Actions";
import { useUserDataContext } from "../hooks/data/useUserDataContext";

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
	const [isClearing, setIsClearing] = useState(false);
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
		if (!isClearing) {
			setTimeout(() => {
				dispatchNotification({ type: ACTIONS.CLEAR });
				setIsClearing(false);
			}, 5000);
			setIsClearing(true);
		}
	}

	return (
		<NotificationContext.Provider value={{ ...state, dispatchNotification }}>
			{children}
		</NotificationContext.Provider>
	);
};
