import styles from "./Notification.module.scss";
import CloseIcon from "../../assets/close-icon.svg";
import { ReactComponent as WarningIcon } from "../../assets/warning.svg";
import { useNotificationContext } from "../../hooks/notification/useNotificationContext";
import { ACTIONS } from "../../actions/notification/Actions";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import { useDocument } from "../../hooks/data/useDocument";

const Notification = ({ notificationObj }) => {
	const { dispatchNotification } = useNotificationContext();
	const { user } = useAuthContext();
	return (
		<div className={styles["notification-container"]}>
			<button
				onClick={() => {
					dispatchNotification({ type: ACTIONS.CLEAR });
				}}
				className={styles["close-button"]}>
				<img src={CloseIcon} alt="close icon" />
			</button>
			<div className={styles["notification-header"]}>
				<p>NOTIFICATION</p>
			</div>
			<div className={styles["notification-content"]}>
				<div>
					<WarningIcon
						className={styles["warning-icon"]}
						fill={notificationObj.error ? "#FF2400" : "#88e2de"}
						stroke={notificationObj.error ? "#FF2400" : "#88e2de"}
						strokeWidth={1}
					/>
				</div>
				<div className={styles["notification-description"]}>
					<p>{notificationObj.message}</p>
				</div>
			</div>
			<div
				className={styles["load-bar"]}
				style={{
					background: notificationObj.error ? "#FF2400" : "#88e2de",
				}}></div>
		</div>
	);
};

export default Notification;
