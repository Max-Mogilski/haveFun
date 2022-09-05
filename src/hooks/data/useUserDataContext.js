import { useContext } from "react";
import { UserDataContext } from "../../context/UserDataContext";

export const useUserDataContext = () => {
	const context = useContext(UserDataContext);
	if (!context) {
		console.log("Cannot use AuthContext out of AuthContextProvider");
		return;
	}
	return context;
};
