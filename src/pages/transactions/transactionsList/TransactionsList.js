import { useState } from "react";
import Transaction from "../transaction/Transaction";
import styles from "./TransactionsList.module.scss";

const TransactionsList = ({ transactions }) => {
	const [showAll, setShowAll] = useState(false);
	let listLength = 0;

	return (
		<div className={styles["transactions-container"]}>
			<div className={styles["transactions-header"]}>
				<div className={styles["transactions-title"]}>
					<p>Transactions</p>
				</div>
				{transactions.length > 2 && (
					<div className={styles["transactions-show"]}>
						{!showAll && (
							<button onClick={() => setShowAll(true)}>Show all</button>
						)}
						{showAll && <button onClick={() => setShowAll(false)}>Hide</button>}
					</div>
				)}
			</div>
			<div className={styles["transactions-list"]}>
				{transactions && transactions.length !== 0 ? (
					transactions.map((transaction) => {
						let itemToReturn = "";
						listLength++;

						if (listLength < 3 || showAll) {
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
		</div>
	);
};

export default TransactionsList;
