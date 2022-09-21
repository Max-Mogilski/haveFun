import Loading from "../loading/Loading";
import styles from "./Avatar.module.scss";
import UserInitAvatar from "../../assets/user-start.svg";

const Avatar = ({ src, borderColor }) => {
	return (
		<div
			className={styles.avatar}
			style={{ borderColor: borderColor === "purple" ? "#8d69f1" : "#fff" }}>
			{src === "loading" ? (
				<Loading />
			) : (
				<img src={src === "start" ? UserInitAvatar : src} alt="user avatar" />
			)}
		</div>
	);
};

export default Avatar;
