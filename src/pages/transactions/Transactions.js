import { useUserDataContext } from "../../hooks/data/useUserDataContext";
import styles from "./Transactions.module.scss";
import { ReactComponent as PlusIcon } from "../../assets/add.svg";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import TransactionsList from "./transactionsList/TransactionsList";
import { Link } from "react-router-dom";

const Transactions = () => {
	const { document } = useUserDataContext();
	return (
		<div className={styles["transactions-container"]}>
			<div className={styles["transactions-card"]}>
				<div className={styles["balance-content"]}>
					<div className={styles["money-icon"]}></div>
					<p>
						{document && document.balance.toFixed(2) / 1000}
						<span>USD</span>
					</p>
					<div className={styles["balance-buttons"]}>
						<Link to={"add"}>
							<button className="btn">
								<PlusIcon fill="#8d69f1" className={styles.icon} />
								<span>Add</span>
							</button>
						</Link>
						<button className="btn">
							<ArrowIcon fill="#8d69f1" className={styles.icon} />
							<span>Send</span>
						</button>
					</div>
				</div>
				<div className={styles["transactions-content"]}>
					<TransactionsList />
				</div>
			</div>
			<div className={styles["transactions-chart"]}></div>
		</div>
	);
};

export default Transactions;
