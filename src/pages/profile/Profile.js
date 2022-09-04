import Avatar from "../../components/avatar/Avatar";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import styles from "./Profile.module.scss";
import UserInitAvatar from "../../assets/user-start.svg";
import ProfileForm from "./profileForm/ProfileForm";
import AvatarUpdate from "./updateAvatar/AvatarUpdate";
import { useState } from "react";
import { useDocument } from "../../hooks/data/useDocument";

const Profile = () => {
	const [error, setError] = useState(null);
	const { user } = useAuthContext();
	const { document } = useDocument("users", user.uid);

	return (
		<div className={styles["profile-settings"]}>
			<h2>Edit profile</h2>
			<div className={styles["avatar-section"]}>
				{document && (
					<Avatar
						src={
							document && document.photoURL ? document.photoURL : UserInitAvatar
						}
						borderColor="purple"
					/>
				)}
				{!document && <Avatar src="loading" borderColor="purple" />}
				<AvatarUpdate setError={setError} />
			</div>
			{error && <p className="error">{error}</p>}
			<ProfileForm />
		</div>
	);
};

export default Profile;
