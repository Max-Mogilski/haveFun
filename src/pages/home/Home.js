import styles from "./Home.module.scss";
import ScratchIcon from "../../assets/scratchIcon.svg";
import GamesList from "./games-list/GamesList";
import QuestionMark from "../../assets/faq.svg";

const Home = () => {
	const games = [
		{
			title: "Scratch card",
			photoURL: ScratchIcon,
			ref: "scratch-card-list",
			isReady: true,
			price: null,
		},
		{
			title: "Coming soon",
			photoURL: QuestionMark,
			ref: "slot-machine",
			isReady: false,
			price: null,
		},
		{
			title: "Coming soon",
			photoURL: QuestionMark,
			ref: "lucky-wheel",
			isReady: false,
			price: null,
		},
	];
	return (
		<div className={styles["games-container"]}>
			<GamesList games={games} />
		</div>
	);
};

export default Home;
