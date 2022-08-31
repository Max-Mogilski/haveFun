import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

const useSignup = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);

	const signup = async (email, password, displayName) => {
		try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error.message);
			setError(error.message);
		}
	};
};
