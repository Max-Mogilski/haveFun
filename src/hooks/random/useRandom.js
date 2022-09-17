import { useCallback } from "react";

export const useRandom = (array, length) => {
	const generateRandomArray = useCallback(() => {
		if (!array) return;
		if (array.length === 0) return;

		const randomArray = [];

		for (let i = 0; i < length; ) {
			array.forEach((element) => {
				if (randomArray.length < length) {
					const randomNumber = Math.random() * 100;

					if (randomNumber < element.chances) {
						randomArray.push(element);
					}
				}
			});
			i++;
			if (randomArray.length !== length && i === length) {
				i--;
			}
		}
		return randomArray;
	}, [array, length]);
	return { generateRandomArray };
};