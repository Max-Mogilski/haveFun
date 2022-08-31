import styles from "./Avatar.module.scss";

const Avatar = ({ src }) => {
	return (
		<div className={styles.avatar}>
			<img src={src} alt="user avatar" />
		</div>
	);
};

export default Avatar;
