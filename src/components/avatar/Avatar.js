import Loading from "../loading/Loading";
import styles from "./Avatar.module.scss";

const Avatar = ({ src, borderColor }) => {
	return (
		<div
			className={styles.avatar}
			style={{ borderColor: borderColor === "purple" ? "#8d69f1" : "#fff" }}>
			{src === "loading" && <Loading />}
			{src !== "loading" && <img src={src} alt="user avatar" />}
		</div>
	);
};

export default Avatar;
