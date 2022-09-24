import { useUserDataContext } from "../../hooks/data/useUserDataContext";
import styles from "./Transactions.module.scss";
import { ReactComponent as PlusIcon } from "../../assets/add.svg";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import TransactionsList from "./transactionsList/TransactionsList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import { useNotificationContext } from "../../hooks/notification/useNotificationContext";
import { ACTIONS } from "../../actions/notification/Actions";

const Transactions = () => {
	const { document } = useUserDataContext();
	const [transactions, setTransactions] = useState(null);
	const { dispatchNotification } = useNotificationContext();

	useEffect(() => {
		if (document && document.transactions) {
			setTransactions(
				document.transactions.sort((a, b) => b.createdAt - a.createdAt)
			);
		}
	}, [document]);

	return (
		<div className={styles["transactions-container"]}>
			<div className={styles["transactions-card"]}>
				<div className={styles["balance-content"]}>
					<div className={styles["money-icon"]}></div>
					<p>
						{document && document.balance}
						<span className={styles.unit}>USD</span>
					</p>
					<div className={styles["balance-buttons"]}>
						<Link to={"add"}>
							<button className="btn">
								<PlusIcon fill="#8d69f1" className={styles.icon} />
								<span>Add</span>
							</button>
						</Link>
						<button
							className="btn"
							onClick={() =>
								dispatchNotification({
									type: ACTIONS.ERROR,
									payload: "Coming soon!",
								})
							}>
							<ArrowIcon fill="#8d69f1" className={styles.icon} />
							<span>Send</span>
						</button>
					</div>
				</div>
				<div className={styles["transactions-content"]}>
					{document && transactions ? (
						<TransactionsList transactions={transactions} />
					) : (
						<div className={styles["loading-container"]}>
							<Loading />
						</div>
					)}
				</div>
			</div>
			<div className={styles["transactions-chart"]}></div>
		</div>
	);
};

export default Transactions;
