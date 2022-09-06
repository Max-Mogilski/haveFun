import styles from "./Transaction.module.scss";

const Transaction = ({ transaction }) => {
	return (
		<div>
			<p>{transaction.title}</p>
		</div>
	);
};

export default Transaction;
