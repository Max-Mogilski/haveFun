import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { useAuthContext } from "../auth/useAuthContext";

export const useUserDocument = (collection) => {
	const { user } = useAuthContext();
	const [document, setDocument] = useState(null);

	useEffect(() => {
		if (!user) {
			return;
		}
		const unsub = onSnapshot(doc(db, collection, user.uid), (doc) => {
			if (!doc) {
				console.log("Could not load data!");
				return;
			} else {
				setDocument(doc.data());
			}
		});
		return () => unsub();
	}, [collection, user]);
	return { document };
};
