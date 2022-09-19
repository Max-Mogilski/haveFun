import { useCallback } from "react";

export const useCalculateMultiplier = () => {
	const getArryWithAmountOfItems = useCallback((items) => {
		const arrayOfSingleItems = [...new Set(items.map((item) => item.name))];
		const countArray = arrayOfSingleItems.map((item) => {
			let multiplier;
			items.forEach((itemToCheck) => {
				if (itemToCheck.name === item) {
					multiplier = itemToCheck.multiplier;
				}
			});
			return { name: item, count: 0, multiplier };
		});
		items.forEach((item) => {
			for (let i = 0; i < countArray.length; i++) {
				if (item.name === countArray[i].name) {
					countArray[i].count++;
				}
			}
		});
		return countArray;
	}, []);

	const calculateMultiplier = useCallback((arryWithAmountOfItems) => {
		let multiplier = 0;
		arryWithAmountOfItems.forEach((item) => {
			if (!item.multiplier) return;
			switch (item.count.toString()) {
				case "3":
					console.log("multiplier", item.multiplier[2]);
					multiplier = item.multiplier[2];
					return;
				case "4":
					console.log("multiplier", item.multiplier[3]);
					multiplier = item.multiplier[3];
					return;
				default:
					return;
			}
		});
		return multiplier;
	}, []);
	return {
		calculateMultiplier,
		getArryWithAmountOfItems,
	};
};
