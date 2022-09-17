import GamesList from "../../../games-list/GamesList";
import DiamondIcon from "../../../../../games-data/scratch-card/assets/diamond.svg";
import PiggyIcon from "../../../../../games-data/scratch-card/assets/piggy.svg";
import MoneyCoinIcon from "../../../../../games-data/scratch-card/assets/coin.svg";

const ScratchCardList = () => {
	const scratchGames = [
		{
			title: "Scratch card 20$",
			photoURL: PiggyIcon,
			ref: "/scratch-card-20",
			isReady: true,
		},
		{
			title: "Scratch card 50$",
			photoURL: MoneyCoinIcon,
			ref: "/scratch-card-50",
			isReady: true,
		},
		{
			title: "Scratch card 100$",
			photoURL: DiamondIcon,
			ref: "/scratch-card-100",
			isReady: true,
		},
	];
	return (
		<div>
			<GamesList games={scratchGames} />
		</div>
	);
};

export default ScratchCardList;
