import { useUserDataContext } from "../../../hooks/data/useUserDataContext";
import Transaction from "../transaction/Transaction";
import styles from "./TransactionsList.module.scss";

const TransactionsList = () => {
	const { document } = useUserDataContext();
	return (
		<div className={styles["transactions-container"]}>
			<div className={styles["transactions-header"]}>
				<div className={styles["transactions-title"]}>
					<p>Transactions</p>
				</div>
				<div className={styles["transactions-show"]}>
					<p>Show all</p>
				</div>
			</div>
			<div>
				{document && document.transactions.length !== 0 ? (
					document.transactions.map((transaction) => {
						return <Transaction transaction={transaction} />;
					})
				) : (
					<p>List of transactions is empty!</p>
				)}
			</div>
		</div>
	);
};

export default TransactionsList;
