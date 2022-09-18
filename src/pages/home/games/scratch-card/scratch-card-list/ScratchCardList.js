import DiamondIcon from "../../../../../games-data/scratch-card/assets/diamond.svg";
import PiggyIcon from "../../../../../games-data/scratch-card/assets/piggy.svg";
import MoneyCoinIcon from "../../../../../games-data/scratch-card/assets/coin.svg";
import GamesList from "../../../games-list/GamesList";

const ScratchCardList = () => {
	const scratchGames = [
		{
			title: "Scratch card 20$",
			photoURL: PiggyIcon,
			ref: "/scratch-card-20",
			isReady: true,
			price: 20,
		},
		{
			title: "Scratch card 50$",
			photoURL: MoneyCoinIcon,
			ref: "/scratch-card-50",
			isReady: true,
			price: 50,
		},
		{
			title: "Scratch card 100$",
			photoURL: DiamondIcon,
			ref: "/scratch-card-100",
			isReady: true,
			price: 100,
		},
	];
	return <GamesList games={scratchGames} />;
};

export default ScratchCardList;
