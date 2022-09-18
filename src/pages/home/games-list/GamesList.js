import { useGame } from "../../../hooks/games/useGame";
import GameCard from "../game-card/GameCard";

import styles from "./GamesCategoryList.module.scss";

const GamesList = ({ games }) => {
	const { startGame } = useGame();

	return (
		<div className={styles["games-list"]}>
			{games.map((game) => (
				<GameCard
					game={game}
					key={Math.random()}
					action={game.price && (() => startGame(game.price))}
				/>
			))}
		</div>
	);
};

export default GamesList;
