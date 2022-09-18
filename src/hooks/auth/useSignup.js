import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { ACTIONS } from "../../actions/auth/Actions";
import { doc, setDoc, Timestamp } from "firebase/firestore";

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
			if (!res) {
				throw new Error("Could not create user!");
			}
			const { user } = res;
			await updateProfile(user, { displayName });

			await setDoc(doc(db, "users", user.uid), {
				id: user.uid,
				email: user.email,
				displayName: user.displayName,
				online: true,
				lvl: 0,
				photoURL: user.photoURL,
				accountCreatedAt: Timestamp.fromDate(new Date()),
				balance: 0,
				friends: [],
				notifications: true,
				gameHistory: [],
				transactions: [],
			});

			dispatch({ type: ACTIONS.SIGNUP, payload: user });
		} catch (error) {
			console.log(error);
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
