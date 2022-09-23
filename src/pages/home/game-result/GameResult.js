import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../../../actions/game/Actions";
import { useCurrentGameContex } from "../../../hooks/games/useCurrentGameContex";
import styles from "./GameResult.module.scss";
import WinAmount from "./win-amount/WinAmount";
import WinMessage from "./win-message/WinMessage";

import ReactDOM from "react-dom";

const GameResult = () => {
	const { statistics, dispatchGame } = useCurrentGameContex();
	const navigate = useNavigate();

	const handleClosePopup = (e) => {
		e.preventDefault();
		dispatchGame({ type: ACTIONS.SET_SHOW_RESULT, payload: false });
		navigate("/scratch-card-list");
	};

	return (
		<>
			{ReactDOM.createPortal(
				<div className={styles["result-container"]}>
					{statistics.win > 0 && (
						<Confetti width={window.innerWidth} height={window.innerHeight} />
					)}
					<div className={styles.card}>
						<button onClick={handleClosePopup}>x</button>
						<div className={styles.content}>
							<WinMessage multiplier={statistics.multiplier} />
							<WinAmount amount={statistics.win} />
						</div>
					</div>
				</div>,
				document.getElementById("modal-root")
			)}
		</>
	);
};

export default GameResult;
