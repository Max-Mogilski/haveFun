import { createContext } from "react";
import { useUserDocument } from "../hooks/data/useUserDocument";

export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
	const { document } = useUserDocument("users");

	return (
		<UserDataContext.Provider value={{ document }}>
			{children}
		</UserDataContext.Provider>
	);
};
