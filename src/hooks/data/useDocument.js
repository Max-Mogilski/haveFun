import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ACTIONS } from "../../actions/notification/Actions";
import { db } from "../../firebase/config";
import { useNotificationContext } from "../notification/useNotificationContext";

export const useDocument = (collection, id) => {
	const [document, setDocument] = useState(null);
	const { dispatchNotification } = useNotificationContext();

	useEffect(() => {
		const unsub = onSnapshot(doc(db, collection, id), (doc) => {
			if (!doc) {
				dispatchNotification({
					type: ACTIONS.ERROR,
					payload: "Could not load data!",
				});
			} else {
				setDocument(doc.data());
			}
		});
		return () => unsub();
	}, [collection, id, dispatchNotification]);
	return { document };
};
