import DiamondIcon from "../../../../../games-data/scratch-card/assets/game-one/diamond.svg";
import CherryIcon from "../../../../../games-data/scratch-card/assets/game-two/cherry.svg";
import StratocasterIcon from "../../../../../games-data/scratch-card/assets/game-three/stratocaster.svg";
import GamesList from "../../../games-list/GamesList";

const ScratchCardList = () => {
	const scratchGames = [
		{
			title: "Scratch card 20$",
			photoURL: DiamondIcon,
			ref: "/scratch-card-20",
			isReady: true,
			price: 20,
		},
		{
			title: "Scratch card 50$",
			photoURL: CherryIcon,
			ref: "/scratch-card-50",
			isReady: true,
			price: 50,
		},
		{
			title: "Scratch card 100$",
			photoURL: StratocasterIcon,
			ref: "/scratch-card-100",
			isReady: true,
			price: 100,
		},
	];
	return <GamesList games={scratchGames} />;
};

export default ScratchCardList;
