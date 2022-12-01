import { useCallback } from "react";

export const useRandom = (array, length) => {
	const generateRandomArray = useCallback(() => {
		if (!array) return;
		if (array.length === 0) return;

		const randomArray = [];

		while (randomArray.length !== length) {
			const randomNumber = Math.random() * 100;
			const randomItem = array[Math.round(Math.random() * array.length)];

			if (randomItem) {
				if (randomNumber < randomItem.chances) {
					randomArray.push(randomItem);
				}
			}
		}
		return randomArray;
	}, [array, length]);
	return { generateRandomArray };
};
