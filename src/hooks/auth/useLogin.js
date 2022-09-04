import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/config";
import { ACTIONS } from "../../actions/auth/Actions";
import { useAuthContext } from "./useAuthContext";
import { useUpdateDocument } from "../data/useUpdateDocument";

export const useLogin = () => {
	const { dispatch } = useAuthContext();
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);
	const { updateDocument } = useUpdateDocument();

	const login = async (email, password) => {
		setError(null);
		setIsPending(true);
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			const { user } = res;

			updateDocument("users", user.uid, { online: true });

			dispatch({ type: ACTIONS.SIGNIN, payload: user });
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
