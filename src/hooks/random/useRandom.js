import { useCallback } from "react";

export const useRandom = (array, length) => {
	const generateRandomArray = useCallback(() => {
		if (!array) return;
		if (array.length === 0) return;
		const randomArray = [];
		for (let i = length; i > 0; i--) {
			if (randomArray.length === length) break;
			array.forEach((element) => {
				const randomNumber = Math.random() * 100;
				if (randomNumber < element.chances) {
					randomArray.push(element);
				}
			});
		}
		console.log(randomArray.length);
		return randomArray;
	}, [array, length]);
	return { generateRandomArray };
};
