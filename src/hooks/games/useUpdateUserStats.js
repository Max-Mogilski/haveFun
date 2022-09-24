import { useUpdateDocument } from "../data/useUpdateDocument";
import { useUserDataContext } from "../data/useUserDataContext";

export const useUpdateUserStats = () => {
	const { updateDocument } = useUpdateDocument();
	const { document } = useUserDataContext();

	const updateUserStats = async (stats) => {
		const isWon = stats.win > 0 ? true : false;

		// await updateDocument("users", document.id, {
		// 	stats: {
		// 		totalWon: isWon ? 1 : 0,
		// 		totalPlayed: 1,
		// 	},
		// });
	};
	return { updateUserStats };
};
