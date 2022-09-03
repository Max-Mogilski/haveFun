import Avatar from "../../components/avatar/Avatar";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import styles from "./Profile.module.scss";
import UserInitAvatar from "../../assets/user-start.svg";
import { useState } from "react";
import { useUpdateDocument } from "../../hooks/data/useUpdateDocument";
import { updateProfile } from "firebase/auth";

const Profile = () => {
	const { user } = useAuthContext();
	const [displayName, setDisplayName] = useState(user && user.displayName);
	const [email, setEmail] = useState(user && user.email);
	const { updateDocument, isPending, error } = useUpdateDocument();
	console.log(isPending);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateDocument("users", user.uid, { email, displayName });
		await updateProfile(user, { email, displayName });
	};
	return (
		<div className={styles["profile-settings"]}>
			<h2>Edit profile</h2>
			<div className={styles["avatar-section"]}>
				<Avatar src={user.photoURL ? user.photoURL : UserInitAvatar} />
				<div className={styles.buttons}>
					<button className="btn">Upload a new avatar</button>
					<button className={styles["delete-btn"]}>Delete avatar</button>
				</div>
			</div>
			<form className={styles["settings-form"]} onSubmit={handleSubmit}>
				<label className={styles.fields}>
					<span>USER NAME</span>
					<input
						value={displayName}
						onChange={(e) => setDisplayName(e.target.value)}
						type="text"
					/>
				</label>
				<label className={styles.fields}>
					<span>EMAIL</span>
					<input
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
				{error && <p className="error">{error}</p>}
			</form>
		</div>
	);
};

export default Profile;
