import { useUpdateDocument } from "../data/useUpdateDocument";
import { useUserDataContext } from "../data/useUserDataContext";

export const useTransaction = () => {
	const { updateDocument } = useUpdateDocument();
	const { document } = useUserDataContext();

	const addTransaction = async (transaction) => {
		if (document) {
			await updateDocument("users", document.id, {
				transactions: [...document.transactions, { ...transaction }],
			});
		}
	};
	return { addTransaction };
};
