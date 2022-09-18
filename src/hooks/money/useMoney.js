import { useUpdateDocument } from "../data/useUpdateDocument";
import { useUserDataContext } from "../data/useUserDataContext";

export const useMoney = () => {
	const { document } = useUserDataContext();
	const { updateDocument } = useUpdateDocument();
	const addMoney = async (value) => {
		await updateDocument("users", document.id, {
			balance: (document.balance + value) * 1000,
		});
	};
	const subtractMoney = async (value) => {
		await updateDocument("users", document.id, {
			balance: (document.balance - value) * 1000,
		});
	};

	return { addMoney, subtractMoney };
};
