import { useCallback, useEffect, useState } from "react";
import { ACTIONS } from "../../../actions/game/Actions";
import { useCurrentGameContex } from "../../../hooks/games/useCurrentGameContex";
import { useGame } from "../../../hooks/games/useGame";
import { useRandom } from "../../../hooks/random/useRandom";
import ScratCardField from "../scratch-field/ScratchCardField";
import styles from "./ScratCardTemplate.module.scss";

const ScratchCardTemplate = ({ items, length, options }) => {
	const [gameItems, setGameItems] = useState(null);
	const { generateRandomArray } = useRandom(items, length);
	const { gameResult } = useGame();
	const { dispatchGame } = useCurrentGameContex();
	let emptyCanvasNumber = 0;

	useEffect(() => {
		setGameItems(generateRandomArray());
	}, [generateRandomArray]);

	useEffect(() => {
		if (gameItems) {
			gameResult(gameItems);
		}
	}, [gameItems, gameResult]);

	const isCanvasEmpty = useCallback(
		(canvas) => {
			const blankCanvas = document.createElement("canvas");
			blankCanvas.width = canvas.width;
			blankCanvas.height = canvas.height;
			if (canvas.toDataURL() === blankCanvas.toDataURL()) {
				emptyCanvasNumber++;
			}
			if (emptyCanvasNumber === length) {
				dispatchGame({ type: ACTIONS.SET_SHOW_RESULT, payload: true });
			}
			return canvas.toDataURL() === blankCanvas.toDataURL();
		},
		[emptyCanvasNumber, length, dispatchGame]
	);

	return (
		<div
			className={styles["game-container"]}
			style={{ background: options.backGroundColor }}>
			<div
				className={styles["scratch-header"]}
				style={{ borderColor: options.borderColor }}>
				<p style={{ color: options.titleColor }}>{options.title}</p>
			</div>
			<div className={styles["scratch-card-container"]}>
				{gameItems &&
					gameItems.map((item) => (
						<ScratCardField
							Image={item.image}
							options={options}
							key={Math.random()}
							isCanvasEmpty={isCanvasEmpty}
						/>
					))}
			</div>
		</div>
	);
};

export default ScratchCardTemplate;
