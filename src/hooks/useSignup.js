import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);

	const signup = async (email, password, displayName) => {
		setError(null);
		setIsPending(true);
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			updateProfile(res.user, { displayName });
			console.log(res);
		} catch (error) {
			console.log(error.message);
			setError(error.message);
		} finally {
			setIsPending(false);
		}
	};
	return { signup, error, isPending };
};
