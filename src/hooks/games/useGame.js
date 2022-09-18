import { useCallback, useState } from "react";
import { ACTIONS } from "../../actions/notification/Actions";
import { useUserDataContext } from "../data/useUserDataContext";
import { useMoney } from "../money/useMoney";
import { useNotificationContext } from "../notification/useNotificationContext";

export const useGame = () => {
	const { setIsAllowedToPlay } = useUserDataContext();
	const { document } = useUserDataContext();
	const { dispatchNotification } = useNotificationContext();
	const { subtractMoney, addMoney } = useMoney();
	const [price, setPrice] = useState(0);

	const startGame = (price) => {
		if (document.balance >= price) {
			subtractMoney(price);
			setIsAllowedToPlay(true);
			setPrice(price);
		} else {
			dispatchNotification({
				type: ACTIONS.ERROR,
				payload: "Your balance is too small to play this game!",
			});
		}
	};
	const endGame = useCallback(() => {
		setIsAllowedToPlay(false);
	}, [setIsAllowedToPlay]);

	const calculateAmount = (array) => {
		let amount = 0;
		array.forEach((item) => {
			switch (item.count) {
				case 3:
					console.log("multiplier", item.multiplier[2]);
					amount = item.multiplier[2] * price;
					return;
				case 4:
					console.log("multiplier", item.multiplier[3]);
					amount = item.multiplier[3] * price;
					return;
				default:
					return;
			}
		});
		// console.log(amount);
		// addMoney(+amount);
	};

	const winGame = useCallback((items) => {
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
		calculateAmount(countArray);
	}, []);
	return { startGame, endGame, winGame };
};
