import { useCallback } from "react";

export const useCalculateMultiplier = () => {
	const getCountedItems = (items) => {
		const countedItems = {};
		items.forEach((item) => {
			// To avoid the worst symbol
			if (!item.multiplier) return;

			if (countedItems[item.name]) {
				if (countedItems[item.name].count === item.multiplier.length) return;

				countedItems[item.name] = {
					count: countedItems[item.name].count + 1,
					multiplier: item.multiplier,
				};
			} else {
				countedItems[item.name] = { count: 1, multiplier: item.multiplier };
			}
		});
		return countedItems;
	};

	const getObjectWithAmountOfItems = useCallback((items) => {
		return getCountedItems(items);
	}, []);

	// getting total multiplier from game
	const calculateMultiplier = useCallback((objectWithAmountOfItems) => {
		let multiplier = 0;

		for (const item in objectWithAmountOfItems) {
			if (
				objectWithAmountOfItems[item].count > 0 &&
				objectWithAmountOfItems[item].multiplier
			) {
				multiplier +=
					objectWithAmountOfItems[item].multiplier[
						objectWithAmountOfItems[item].count - 1
					];
			}
		}
		return multiplier;
	}, []);
	return {
		calculateMultiplier,
		getObjectWithAmountOfItems,
	};
};
