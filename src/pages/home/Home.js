import GamesList from "./games-list/GamesList";
import styles from "./Home.module.scss";
import ScratchIcon from "../../assets/scratchIcon.svg";

const Home = () => {
	const games = [
		{ title: "Scratch card", photoURL: ScratchIcon, ref: "scratch-card" },
	];
	return (
		<div className={styles["games-container"]}>
			<GamesList games={games} />
		</div>
	);
};

export default Home;
