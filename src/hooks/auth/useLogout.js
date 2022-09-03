import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { ACTIONS } from "../../auth-actions/Actions";
import { useAuthContext } from "./useAuthContext";
import { useUpdateDocument } from "../data/useUpdateDocument";

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(null);
	const [isCancelled, setIsCancelled] = useState(false);
	const { user } = useAuthContext();
	const { updateDocument } = useUpdateDocument();

	const logout = async () => {
		try {
			setError(null);
			setIsPending(true);

			await signOut(auth);
			updateDocument("users", user.uid, { online: false });

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
