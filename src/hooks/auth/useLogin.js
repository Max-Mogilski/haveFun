import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { ACTIONS } from "../../auth-actions/Actions";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
	const { dispatch } = useAuthContext();
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);

	const login = async (email, password) => {
		setError(null);
		setIsPending(true);
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);

			dispatch({ type: ACTIONS.SIGNIN, payload: res.user });
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
	return { login, error, isPending };
};
