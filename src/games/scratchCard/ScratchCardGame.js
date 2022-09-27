import styles from "./ScratchCardGame.module.scss";
import ScratchCardTemplate from "./scratchCardTemplate/ScratchCardTemplate";
import ScratchItemsList from "./scratch-item-list/ScratchItemsList";
import { useEffect, useState } from "react";
import { useGame } from "../../hooks/games/useGame";
import { useCurrentGameContex } from "../../hooks/games/useCurrentGameContex";
import { useMoney } from "../../hooks/money/useMoney";
import { ACTIONS } from "../../actions/game/Actions";
import { useUpdateUserStats } from "../../hooks/games/useUpdateUserStats";

const ScratchCardGame = ({ items, length, options }) => {
	const { endGame } = useGame();
	const { statistics } = useCurrentGameContex();
	const { addMoney } = useMoney();
	const { dispatchGame } = useCurrentGameContex();
	const [windowWidth] = useState(window.innerWidth);
	const { updateUserStats } = useUpdateUserStats();

	useEffect(() => {
		return () => {
			endGame();
		};
	}, [endGame]);

	useEffect(() => {
		return () => {
			if (windowWidth <= 600) {
				addMoney(Math.round(statistics.bet));
				return;
			}
			if (statistics.win > 0) {
				addMoney(Math.round(statistics.win));
				updateUserStats(1);
				dispatchGame({ type: ACTIONS.CLEAR_GAME });
			} else {
				updateUserStats(0);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [statistics.win, dispatchGame]);

	if (windowWidth <= 600) {
		return (
			<div className={styles["mobile-fallback"]}>
				<p>To play on mobile please download our app!</p>
			</div>
		);
	}

	return (
		<div className={styles["games-container"]}>
			<ScratchCardTemplate items={items} length={length} options={options} />
			<ScratchItemsList items={items} />
		</div>
	);
};

export default ScratchCardGame;
