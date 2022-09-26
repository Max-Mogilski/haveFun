import { useParams } from "react-router-dom";
import { useCustomUserDocument } from "../../hooks/data/useCustomUserDocument";
import InfoCard from "./info-card/InfoCard";
import ProfileHeader from "./profile-header/ProfileHeader";
import styles from "./Profile.module.scss";
import { ReactComponent as DiamondIcon } from "../../games-data/scratch-card/assets/game-one/diamond.svg";
import { ReactComponent as RewardIcon } from "../../assets/reward.svg";

const Profile = () => {
	const params = useParams();
	const { document } = useCustomUserDocument("users", params.id);
	if (!document) {
		return (
			<div className={styles.fallback}>
				<p>Profile not found!</p>
			</div>
		);
	}
	return (
		<div className={styles.profile}>
			<ProfileHeader userData={document} />
			<div className={styles["info-container"]}>
				<InfoCard
					Img={RewardIcon}
					data={document && document.stats.totalPlayed}
					title="Total games played"
				/>
				<InfoCard
					Img={DiamondIcon}
					data={document && document.stats.totalWon}
					title="Total games won"
				/>
			</div>
		</div>
	);
};

export default Profile;
