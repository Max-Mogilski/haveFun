import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { ACTIONS } from "../../auth-actions/Actions";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(null);
	const [isCancelled, setIsCancelled] = useState(false);

	const logout = async () => {
		try {
			setError(null);
			setIsPending(true);

			await signOut(auth);

			dispatch({ type: ACTIONS.LOGOUT });
		} catch (error) {
			console.log(error.message);
			if (!isCancelled) {
				setError(error.message);
			}
		} finally {
			if (!isCancelled) {
				setIsPending(false);
			}
		}
	};
	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);
	return { logout, error, isPending };
};
