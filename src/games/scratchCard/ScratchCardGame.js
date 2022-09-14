import styles from "./ScratchCardGame.module.scss";
import ScratchCardTemplate from "./scratchCardTemplate/ScratchCardTemplate";
import { items } from "./data/items";

const ScratchCardGame = () => {
	return (
		<div className={styles["games-container"]}>
			<ScratchCardTemplate items={items} length={9} />
		</div>
	);
};

export default ScratchCardGame;
