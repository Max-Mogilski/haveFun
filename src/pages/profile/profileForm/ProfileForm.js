import { updateEmail, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../../../actions/notification/Actions";
import { useAuthContext } from "../../../hooks/auth/useAuthContext";
import { useUpdateDocument } from "../../../hooks/data/useUpdateDocument";
import { useNotificationContext } from "../../../hooks/notification/useNotificationContext";
import styles from "./ProfileForm.module.scss";

const ProfileForm = () => {
	const { user } = useAuthContext();
	const [displayName, setDisplayName] = useState(user && user.displayName);
	const [email, setEmail] = useState(user && user.email);
	const { updateDocument, isPending, error } = useUpdateDocument();
	const navigate = useNavigate();
	const { notification, dispatchNotification } = useNotificationContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (displayName.trim().length === 0 || email.trim().length === 0) {
			dispatchNotification({
				type: ACTIONS.ERROR,
				payload: "Fields cannot be empty!",
			});
			return;
		}
		if (user.email !== email || user.displayName !== displayName) {
			await updateDocument("users", user.uid, { email, displayName });
			await updateProfile(user, { email, displayName });
		}
		navigate("/");
		if (user.email !== email) {
			await updateEmail(user, email);
		}
	};
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
					<input className={styles.toggle} id="notifications" type="checkbox" />
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
			{error && <p className="error">{error}</p>}
		</form>
	);
};

export default ProfileForm;
