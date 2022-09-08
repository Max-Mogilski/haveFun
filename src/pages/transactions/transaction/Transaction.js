import { formatDistanceToNow } from "date-fns";
import styles from "./Transaction.module.scss";

const Transaction = ({ transaction }) => {
	return (
		<div key={transaction.id} className={styles["transaction-contianer"]}>
			<div className={styles.content}>
				<p>{transaction.title}</p>
				<p className={styles.date}>
					{formatDistanceToNow(transaction.createdAt.toDate(), {
						addSuffix: true,
					})}
				</p>
			</div>
			<div className={styles.amount}>
				<p>
					{transaction.type === "add" ? (
						<span className={styles["plus"]}>+{transaction.amount}$</span>
					) : (
						<span className={styles["minus"]}>-{transaction.amount}$</span>
					)}
				</p>
			</div>
		</div>
	);
};

export default Transaction;
