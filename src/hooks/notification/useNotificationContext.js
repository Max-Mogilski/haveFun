import { useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";

export const useNotificationContext = () => {
	const context = useContext(NotificationContext);
	if (!context) {
		console.log("Cannot use AuthContext out of AuthContextProvider");
		return;
	}
	return context;
};
