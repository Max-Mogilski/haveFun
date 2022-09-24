import styles from "./InfoCard.module.scss";

const InfoCard = ({ Img, data, title }) => {
	return (
		<div className={styles["info-card"]}>
			<div className={styles["circle-icon"]}>{<Img />}</div>
			<div className={styles["info-content"]}>
				<p className={styles.data}>{data}</p>
				<p className={styles.title}>{title}</p>
			</div>
		</div>
	);
};

export default InfoCard;
