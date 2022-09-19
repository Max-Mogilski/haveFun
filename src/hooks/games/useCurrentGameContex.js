import { useContext } from "react";
import { CurrentGameContext } from "../../context/CurrentGameContext";

export const useCurrentGameContex = () => {
	const context = useContext(CurrentGameContext);
	if (!context) {
		console.log("Cannot use AuthContext out of AuthContextProvider");
		return;
	}
	return context;
};
