import styles from "./ScratchCardGame.module.scss";
import ScratchCardTemplate from "./scratchCardTemplate/ScratchCardTemplate";
import ScratchItemsList from "./scratch-item-list/ScratchItemsList";
import { useEffect } from "react";
import { useGame } from "../../hooks/games/useGame";
import { useCurrentGameContex } from "../../hooks/games/useCurrentGameContex";
import { useMoney } from "../../hooks/money/useMoney";
import { ACTIONS } from "../../actions/game/Actions";

const ScratchCardGame = ({ items, length, options }) => {
	const { endGame } = useGame();
	const { statistics } = useCurrentGameContex();
	const { addMoney } = useMoney();
	const { dispatchGame } = useCurrentGameContex();
	useEffect(() => {
		return () => {
			endGame();
		};
	}, [endGame]);

	useEffect(() => {
		return () => {
			if (statistics.win > 0) {
				addMoney(Math.round(statistics.win));
				dispatchGame({ type: ACTIONS.CLEAR_GAME });
			}
		};
	});
	return (
		<div className={styles["games-container"]}>
			<ScratchCardTemplate items={items} length={length} options={options} />
			<ScratchItemsList items={items} />
		</div>
	);
};

export default ScratchCardGame;
