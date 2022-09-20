import Canvas from "../../../components/canvas/Canvas";
import styles from "./ScratchCardField.module.scss";

const ScratCardField = ({ Image, options, isCanvasEmpty }) => {
	return (
		<div className={styles["scratch-card"]}>
			<Canvas options={options} isCanvasEmpty={isCanvasEmpty} />
			<Image style={{ padding: "2rem" }} />
		</div>
	);
};

export default ScratCardField;
