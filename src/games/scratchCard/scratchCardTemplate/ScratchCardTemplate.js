import { useEffect, useState } from "react";
import { useRandom } from "../../../hooks/random/useRandom";
import ScratCardField from "../scratch-field/ScratchCardField";
import styles from "./ScratCardTemplate.module.scss";

const ScratchCardTemplate = ({ items, length }) => {
	const [array, setArray] = useState(null);
	const { generateRandomArray } = useRandom(items, length);

	useEffect(() => {
		setArray(generateRandomArray());
	}, [generateRandomArray]);

	return (
		<div className={styles["game-container"]}>
			{array &&
				array.map((item) => (
					<ScratCardField Image={item.image} key={Math.random()} />
				))}
		</div>
	);
};

export default ScratchCardTemplate;
