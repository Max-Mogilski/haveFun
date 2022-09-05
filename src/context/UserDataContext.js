import { createContext } from "react";

export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
	// const {}

	return <UserDataContext.Provider>{children}</UserDataContext.Provider>;
};
