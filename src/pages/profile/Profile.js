import Avatar from "../../components/avatar/Avatar";
import styles from "./Profile.module.scss";
import ProfileForm from "./profileForm/ProfileForm";
import AvatarUpdate from "./updateAvatar/AvatarUpdate";
import { useEffect, useState } from "react";
import { useUserDataContext } from "../../hooks/data/useUserDataContext";
import { useNotificationContext } from "../../hooks/notification/useNotificationContext";
import { ACTIONS } from "../../actions/notification/Actions";

const Profile = () => {
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const { document } = useUserDataContext();
	const { dispatchNotification } = useNotificationContext();

	useEffect(() => {
		if (error) {
			dispatchNotification({ type: ACTIONS.ERROR, payload: error });
		}
	}, [error, dispatchNotification]);

	useEffect(() => {
		if (success) {
			dispatchNotification({ type: ACTIONS.SUCCESS, payload: success });
		}
	}, [success, dispatchNotification]);

	return (
		<div className={styles["profile-settings"]}>
			<h2>Edit profile</h2>
			<div className={styles["avatar-section"]}>
				{document.photoURL ? (
					<Avatar src={document.photoURL} borderColor="purple" />
				) : (
					<Avatar src="loading" />
				)}
				<AvatarUpdate setError={setError} setSuccess={setSuccess} />
			</div>
			<ProfileForm />
		</div>
	);
};

export default Profile;
