import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase/config";

export const useUpdateDocument = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);

	const updateDocument = async (collection, document, updatedObj) => {
		console.log("updating...");
		setError(null);
		setIsPending(true);
		try {
			await updateDoc(doc(db, collection, document), updatedObj);
		} catch (error) {
			setError(error.message);
			console.log(error);
		} finally {
			setIsPending(false);
		}
	};
	return { error, isPending, updateDocument };
};
