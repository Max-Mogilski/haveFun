import { useUserDataContext } from "../../hooks/data/useUserDataContext";
import styles from "./Transactions.module.scss";

const Transactions = () => {
	const { document } = useUserDataContext();
	return (
		<div className={styles["transactions-container"]}>
			<div className={styles["transactions-card"]}>
				<div className={styles["balance-content"]}>
					<div className={styles["money-icon"]}></div>
					<p>
						{document && document.balance.toFixed(2)}
						<span>USD</span>
					</p>
					<div className={styles["balance-buttons"]}>
						<button className="btn">Add</button>
						<button className="btn">Send</button>
					</div>
				</div>
				<div className={styles["transactions-content"]}></div>
			</div>
			<div className={styles["transactions-chart"]}></div>
		</div>
	);
};

export default Transactions;
