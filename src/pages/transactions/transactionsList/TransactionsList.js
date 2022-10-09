import Transaction from "../transaction/Transaction";
import styles from "./TransactionsList.module.scss";

const TransactionsList = ({ transactions, show }) => {
	let listLength = 0;

	return (
		<div className={styles["transactions-list"]}>
			{transactions && transactions.length !== 0 ? (
				transactions.map((transaction) => {
					let itemToReturn = "";
					listLength++;

					if (listLength < 3 || show) {
						itemToReturn = (
							<Transaction transaction={transaction} key={transaction.id} />
						);
					}
					return itemToReturn;
				})
			) : (
				<p>List of transactions is empty!</p>
			)}
		</div>
	);
};

export default TransactionsList;
