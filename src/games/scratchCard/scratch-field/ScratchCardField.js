import Canvas from "../../../components/canvas/Canvas";
import styles from "./ScratchCardField.module.scss";

const ScratCardField = ({ Image }) => {
	return (
		<div className={styles["scratch-card"]}>
			<Canvas />
			<Image style={{ padding: "2rem" }} />
		</div>
	);
};

export default ScratCardField;
