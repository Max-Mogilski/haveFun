import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { ACTIONS } from "../auth-actions/Actions";

export const useSignup = () => {
	const { dispatch } = useAuthContext();
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);

	const signup = async (email, password, displayName) => {
		setError(null);
		setIsPending(true);
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			updateProfile(res.user, { displayName });

			dispatch({ type: ACTIONS.SIGNUP, payload: res.user });
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
	return { signup, error, isPending };
};
