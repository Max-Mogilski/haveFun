import styles from "./ScratchCardGame.module.scss";
import ScratchCardTemplate from "./scratchCardTemplate/ScratchCardTemplate";
import ScratchItemsList from "./scratch-item-list/ScratchItemsList";
import { useEffect } from "react";
import { useGame } from "../../hooks/games/useGame";

const ScratchCardGame = ({ items, length, options }) => {
	const { endGame } = useGame();
	useEffect(() => {
		return () => {
			endGame();
		};
	}, [endGame]);
	return (
		<div className={styles["games-container"]}>
			<ScratchCardTemplate items={items} length={length} options={options} />
			<ScratchItemsList items={items} />
		</div>
	);
};

export default ScratchCardGame;
