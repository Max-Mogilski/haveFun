import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";

export const useDocument = (collection, id) => {
	const [document, setDocument] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		setError(null);
		const unsub = onSnapshot(doc(db, collection, id), (doc) => {
			if (!doc) {
				setError("Could not load data");
			} else {
				setDocument(doc.data());
			}
		});
		return () => unsub();
	}, [collection, id]);
	return { document, error };
};
