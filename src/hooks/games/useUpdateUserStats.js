import { useUpdateDocument } from "../data/useUpdateDocument";
import { useUserDataContext } from "../data/useUserDataContext";

export const useUpdateUserStats = () => {
	const { updateDocument } = useUpdateDocument();
	const { document } = useUserDataContext();

	const updateUserStats = async (isWin) => {
		await updateDocument("users", document.id, {
			stats: {
				totalPlayed: document.stats.totalPlayed + 1,
				totalWon: document.stats.totalWon + isWin,
			},
		});
	};

	return { updateUserStats };
};
