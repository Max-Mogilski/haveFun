import { Link } from "react-router-dom";
import styles from "./GameCard.module.scss";

const GameCard = ({ game }) => {
	return (
		<Link to={game.ref} className={styles["game-card"]}>
			<img src={game.photoURL} alt="game icon" />
			<p>{game.title}</p>
		</Link>
	);
};

export default GameCard;
