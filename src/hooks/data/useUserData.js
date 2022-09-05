import { useState } from "react";
import { useAuthContext } from "../auth/useAuthContext";
import { useDocument } from "./useDocument";

export const useUserData = () => {
	const { user } = useAuthContext();
	const { document } = useDocument("users", user.uid);
	// const {} = useState(null)

	if (!document) {
		return;
	}

	return { document };
};
