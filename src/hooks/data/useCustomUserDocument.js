import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";

export const useCustomUserDocument = (collection, id) => {
	const [document, setDocument] = useState(null);

	useEffect(() => {
		if (!id) {
			return;
		}
		const unsub = onSnapshot(doc(db, collection, id), (doc) => {
			if (!doc) {
				console.log("Could not load data!");
				return;
			} else {
				setDocument(doc.data());
			}
		});
		return () => unsub();
	}, [collection, id]);
	return { document };
};
