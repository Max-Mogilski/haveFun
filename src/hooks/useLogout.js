import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { ACTIONS } from "../auth-actions/Actions";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(null);

	const logout = async () => {
		try {
			setError(null);
			setIsPending(true);

			await signOut(auth);

			dispatch({ type: ACTIONS.LOGOUT });
		} catch (error) {
			console.log(error.message);
			setError(error.message);
		} finally {
			setIsPending(false);
		}
	};
	return { logout, error, isPending };
};
