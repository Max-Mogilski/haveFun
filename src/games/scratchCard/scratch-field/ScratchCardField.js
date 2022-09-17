import Canvas from "../../../components/canvas/Canvas";
import styles from "./ScratchCardField.module.scss";

const ScratCardField = ({ Image, options }) => {
	return (
		<div className={styles["scratch-card"]}>
			<Canvas options={options} />
			<Image style={{ padding: "2rem" }} />
		</div>
	);
};

export default ScratCardField;
