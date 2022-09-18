import { Link } from "react-router-dom";
import styles from "./GameCard.module.scss";

const GameCard = ({ game, action }) => {
	return (
		<Link
			to={game.isReady ? game.ref : "/"}
			className={styles["game-card"]}
			onClick={action}>
			<img src={game.photoURL} alt="game icon" />
			<p>{game.title}</p>
		</Link>
	);
};

export default GameCard;
