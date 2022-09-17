import styles from "./ScratchCardGame.module.scss";
import ScratchCardTemplate from "./scratchCardTemplate/ScratchCardTemplate";
import ScratchItemsList from "./scratch-item-list/ScratchItemsList";

const ScratchCardGame = ({ items, length, options }) => {
	return (
		<div className={styles["games-container"]}>
			<ScratchCardTemplate items={items} length={length} options={options} />
			<ScratchItemsList items={items} />
		</div>
	);
};

export default ScratchCardGame;
