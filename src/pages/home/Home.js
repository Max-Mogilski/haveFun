import GamesList from "./games-list/GamesList";
import styles from "./Home.module.scss";
import ScratchIcon from "../../assets/scratchIcon.svg";

const Home = () => {
	const games = [
		{
			title: "Scratch card",
			photoURL: ScratchIcon,
			ref: "scratch-card-list",
			isReady: true,
		},
		{
			title: "Slot machine",
			photoURL: ScratchIcon,
			ref: "slot-machine",
			isReady: false,
		},
		{
			title: "Lucky wheel",
			photoURL: ScratchIcon,
			ref: "lucky-wheel",
			isReady: false,
		},
	];
	return (
		<div className={styles["games-container"]}>
			<GamesList games={games} />
		</div>
	);
};

export default Home;
