import styles from "./ScratchCardGame.module.scss";
import ScratCardField from "./scratch-field/ScratchCardField";
import { ReactComponent as DiamondIcon } from "./assets/diamond.svg";
import { ReactComponent as MoneyIcon } from "./assets/money.svg";
import { ReactComponent as CoinIcon } from "./assets/coin.svg";

const ScratchCardGame = () => {
	return (
		<div className={styles["game-container"]}>
			<ScratCardField Image={MoneyIcon} />
			<ScratCardField Image={MoneyIcon} />
			<ScratCardField Image={MoneyIcon} />
			<ScratCardField Image={CoinIcon} />
			<ScratCardField Image={CoinIcon} />
			<ScratCardField Image={CoinIcon} />
			<ScratCardField Image={DiamondIcon} />
			<ScratCardField Image={DiamondIcon} />
			<ScratCardField Image={DiamondIcon} />
		</div>
	);
};

export default ScratchCardGame;
