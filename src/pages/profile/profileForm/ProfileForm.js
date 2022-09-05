import { updateEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../../../actions/notification/Actions";
import { useAuthContext } from "../../../hooks/auth/useAuthContext";
import { useDocument } from "../../../hooks/data/useDocument";
import { useUpdateDocument } from "../../../hooks/data/useUpdateDocument";
import { useNotificationContext } from "../../../hooks/notification/useNotificationContext";
import styles from "./ProfileForm.module.scss";

const ProfileForm = () => {
	const { user } = useAuthContext();
	const { document } = useDocument("users", user.uid);
	const [displayName, setDisplayName] = useState(user && user.displayName);
	const [email, setEmail] = useState(user && user.email);
	const { updateDocument, isPending } = useUpdateDocument();
	const navigate = useNavigate();
	const { dispatchNotification } = useNotificationContext();
	const [showNotification, setShowNotification] = useState(true);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (displayName.trim().length === 0 || email.trim().length === 0) {
			dispatchNotification({
				type: ACTIONS.ERROR,
				payload: "Fields cannot be empty!",
			});
			return;
		}
		if (
			user.email !== email ||
			user.displayName !== displayName ||
			user.notifications !== showNotification
		) {
			if (showNotification) {
				dispatchNotification({ type: ACTIONS.NOTIFICATION_ON });
			} else {
				dispatchNotification({ type: ACTIONS.NOTIFICATION_OFF });
			}
			await updateDocument("users", user.uid, {
				email,
				displayName,
				notifications: showNotification,
			});
			await updateProfile(user, { email, displayName });
		}
		navigate("/");
		if (user.email !== email) {
			await updateEmail(user, email);
		}
		dispatchNotification({
			type: ACTIONS.SUCCESS,
			payload: "Profile has been saved",
		});
	};
	useEffect(() => {
		if (document) {
			setShowNotification(document.notifications);
		}
	}, [document]);
	return (
		<form className={styles["settings-form"]} onSubmit={handleSubmit}>
			<label className={styles.fields}>
				<span>USER NAME</span>
				<input
					required
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
					type="text"
				/>
			</label>
			<label className={styles.fields}>
				<span>EMAIL</span>
				<input
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
				/>
			</label>
			<div className={styles.checkboxs}>
				<div className={styles["toggle-container"]}>
					<input
						className={styles.toggle}
						id="notifications"
						type="checkbox"
						checked={showNotification}
						onChange={(e) => {
							setShowNotification(e.target.checked);
						}}
					/>
					<label htmlFor="notifications" className={styles.label}>
						<div className={styles.ball}></div>
					</label>
					<span>NOTIFICATIONS</span>
				</div>
			</div>
			{!isPending && <button className="btn">Save</button>}
			{isPending && (
				<button className="btn" disabled>
					Saving...
				</button>
			)}
		</form>
	);
};

export default ProfileForm;
