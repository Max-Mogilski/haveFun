import { createContext, useEffect, useState } from "react";
import { useUserDocument } from "../hooks/data/useUserDocument";

export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
	const { document } = useUserDocument("users");
	const [isAllowedToPlay, setIsAllowedToPlay] = useState(false);

	useEffect(() => {
		console.log(isAllowedToPlay);
	}, [isAllowedToPlay]);
	const modifiedDocument = {
		...document,
		balance: document && +(document.balance / 1000).toFixed(2),
	};

	return (
		<UserDataContext.Provider
			value={{
				document: modifiedDocument,
				isAllowedToPlay,
				setIsAllowedToPlay,
			}}>
			{children}
		</UserDataContext.Provider>
	);
};
