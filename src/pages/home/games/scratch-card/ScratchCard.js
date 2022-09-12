import ScratchCardGame from "../../../../games/scratchCard/ScratchCardGame";
import styles from "./ScratchCard.module.scss";

const ScratchCard = () => {
	return (
		<div className={styles["game-container"]}>
			<ScratchCardGame />
		</div>
	);
};

export default ScratchCard;
