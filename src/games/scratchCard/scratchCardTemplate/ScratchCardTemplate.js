import { useEffect, useState } from "react";
import { useRandom } from "../../../hooks/random/useRandom";
import ScratCardField from "../scratch-field/ScratchCardField";
import styles from "./ScratCardTemplate.module.scss";

const ScratchCardTemplate = ({ items, length, options }) => {
	const [gameItems, setGameItems] = useState(null);
	const { generateRandomArray } = useRandom(items, length);

	useEffect(() => {
		setGameItems(generateRandomArray());
	}, [generateRandomArray]);

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
						/>
					))}
			</div>
		</div>
	);
};

export default ScratchCardTemplate;
