import { formatDistanceToNow } from "date-fns";
import Avatar from "../../../components/avatar/Avatar";
import styles from "./ProfileHeader.module.scss";

const ProfileHeader = ({ userData }) => {
	return (
		<div className={styles["header-container"]}>
			<Avatar
				src={userData ? userData.photoURL : "loading"}
				borderColor="purple"
				size={"10rem"}
			/>
			<p className={styles["display-name"]}>
				{userData && userData.displayName}
			</p>
			<p className={styles["joined-date"]}>
				Joined{" "}
				{userData &&
					formatDistanceToNow(userData.accountCreatedAt.toDate(), {
						addSuffix: true,
					})}
			</p>
		</div>
	);
};

export default ProfileHeader;
