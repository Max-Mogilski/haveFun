import Avatar from "../../components/avatar/Avatar";
import styles from "./Profile.module.scss";
import UserInitAvatar from "../../assets/user-start.svg";
import ProfileForm from "./profileForm/ProfileForm";
import AvatarUpdate from "./updateAvatar/AvatarUpdate";
import { useState } from "react";
import { useUserDataContext } from "../../hooks/data/useUserDataContext";

const Profile = () => {
	const [error, setError] = useState(null);
	const { document } = useUserDataContext();
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
