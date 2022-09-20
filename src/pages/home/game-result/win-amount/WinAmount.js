import { useEffect, useState } from "react";

const WinAmount = ({ amount }) => {
	const [win, setWin] = useState(0);

	useEffect(() => {
		let interval = null;
		let timer = null;

		if (!amount) return;

		if (amount < 500) {
			timer = 50;
		} else if (amount < 5000) {
			timer = 40;
		} else if (amount > 5000) {
			timer = 10;
		}

		if (win < amount) {
			interval = setInterval(() => {
				setWin((prev) => prev + 1);
				console.log(win);
			}, timer);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [amount, win, setWin]);
	return <p>Total Win: {win}$</p>;
};
export default WinAmount;
