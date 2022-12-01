import { useCallback } from "react";
import { ACTIONS } from "../../actions/game/Actions";
import { useUserDataContext } from "../data/useUserDataContext";
import { useMoney } from "../money/useMoney";
import { useCalculateMultiplier } from "./useCalculateMultiplier";
import { useCurrentGameContex } from "./useCurrentGameContex";

export const useGame = () => {
	const { setIsAllowedToPlay } = useUserDataContext();
	const { document } = useUserDataContext();
	const { subtractMoney } = useMoney();
	const { calculateMultiplier, getObjectWithAmountOfItems } =
		useCalculateMultiplier();
	const { dispatchGame, price } = useCurrentGameContex();

	const startGame = (amount) => {
		if (document.balance >= amount) {
			subtractMoney(amount);
			setIsAllowedToPlay(true);
			dispatchGame({
				type: ACTIONS.SET_PRICE,
				payload: {
					price: amount,
				},
			});
		}
	};

	const endGame = useCallback(() => {
		setIsAllowedToPlay(false);
	}, [setIsAllowedToPlay]);

	const gameResult = useCallback(
		(items) => {
			const objectWithAmoutOfItems = getObjectWithAmountOfItems(items);
			const multiplier = calculateMultiplier(objectWithAmoutOfItems);
			dispatchGame({
				type: ACTIONS.UPDATE_GAME,
				payload: {
					price,
					multiplier,
					win: price * multiplier,
					gameItems: objectWithAmoutOfItems,
				},
			});
		},
		[getObjectWithAmountOfItems, calculateMultiplier, dispatchGame, price]
	);
	return { startGame, endGame, gameResult };
};
