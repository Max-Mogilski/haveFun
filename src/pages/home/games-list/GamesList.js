import GameCard from "../game-card/GameCard";

import styles from "./GamesList.module.scss";

const GamesList = ({ games }) => {
	return (
		<div className={styles["games-list"]}>
			{games.map((game) => (
				<GameCard game={game} />
			))}
		</div>
	);
};

export default GamesList;
