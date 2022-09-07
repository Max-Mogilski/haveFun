import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../../actions/notification/Actions";
import { useUpdateDocument } from "../../hooks/data/useUpdateDocument";
import { useUserDataContext } from "../../hooks/data/useUserDataContext";
import { useNotificationContext } from "../../hooks/notification/useNotificationContext";
import styles from "./AddTransaction.module.scss";

const AddTransaction = () => {
	const { document } = useUserDataContext();
	const [amount, setAmount] = useState(0);
	const { dispatchNotification } = useNotificationContext();
	const { updateDocument, isPending, error } = useUpdateDocument();
	const navigate = useNavigate();

	const handleAddMoney = async (e) => {
		e.preventDefault();
		if (amount < 20) {
			dispatchNotification({
				type: ACTIONS.ERROR,
				payload: "Amount is too small to add!",
			});
			return;
		}

		if (document) {
			if (document.balance / 1000 > 100000) {
				dispatchNotification({
					type: ACTIONS.ERROR,
					payload: "Your balance is too high!",
				});
				return;
			}

			if (amount > 10000) {
				dispatchNotification({
					type: ACTIONS.ERROR,
					payload: "Cannot add more than 10000$!",
				});
				return;
			}

			await updateDocument("users", document.id, {
				balance: document.balance + (Math.round(amount * 100) / 100) * 1000,
			});

			if (error) {
				dispatchNotification({
					type: ACTIONS.ERROR,
					payload: "Couldn't add money, please try later!",
				});
				return;
			}

			navigate("/");

			dispatchNotification({
				type: ACTIONS.SUCCESS,
				payload: "Money has been successfully added!",
			});
		}
	};

	return (
		<div className={styles["add-money-container"]}>
			<div className={styles["add-money-card"]}>
				<div className={styles["add-money-content"]}>
					<div className={styles.balance}>
						<span>USD</span>
						<p className={styles["amount"]}>
							Balance: {document && document.balance.toFixed(2) / 1000}$
						</p>
					</div>
					<div className={styles["input-field"]}>
						<input
							max="10000"
							type="number"
							placeholder="0"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
						/>
						<p>Minimal amout 20$</p>
					</div>
				</div>
				<div className={styles["add-money-buttons"]}>
					<button
						className="btn"
						onClick={() => {
							setAmount(50);
						}}>
						50 $
					</button>
					<button
						className="btn"
						onClick={() => {
							setAmount(100);
						}}>
						100 $
					</button>
					<button
						className="btn"
						onClick={() => {
							setAmount(250);
						}}>
						250 $
					</button>
					<button
						className="btn"
						onClick={() => {
							setAmount(500);
						}}>
						500 $
					</button>
				</div>
			</div>
			{!isPending && (
				<button className={`${styles["add-btn"]} btn`} onClick={handleAddMoney}>
					Add money
				</button>
			)}
			{isPending && (
				<button className={`${styles["add-btn"]} btn`} disabled>
					Loading...
				</button>
			)}
		</div>
	);
};

export default AddTransaction;
