import { ReactComponent as DiamondIcon } from "../assets/diamond.svg";
import { ReactComponent as MoneyIcon } from "../assets/money.svg";
import { ReactComponent as CoinIcon } from "../assets/coin.svg";
import { ReactComponent as PiggyIcon } from "../assets/piggy.svg";

export const items = [
	{
		name: "diamond",
		image: DiamondIcon,
		chances: 4,
		multiplier: [0, 0, 300, 500],
	},
	{
		name: "moneyCoin",
		image: CoinIcon,
		chances: 20,
		multiplier: [0, 0, 50, 100],
	},
	{
		name: "money",
		image: MoneyIcon,
		chances: 30,
		multiplier: [0, 0, 5, 10],
	},
	{ name: "piggy", image: PiggyIcon, chances: 78 },
];
