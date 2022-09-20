import { useEffect, useRef, useState } from "react";
import styles from "./WinMessage.module.scss";

const WinMessage = ({ multiplier }) => {
	const [message, setMessage] = useState("");

	let styleName = useRef("");

	useEffect(() => {
		if (multiplier === 0) {
			styleName.current = "unlucky";
			setMessage("Bad luck!");
		} else if (multiplier > 0 && multiplier <= 10) {
			styleName.current = "nice-win";
			setMessage("Nice Win!");
		} else if (multiplier > 10 && multiplier <= 50) {
			styleName.current = "super-win";
			setMessage("Super Win!");
		} else if (multiplier > 50 && multiplier <= 200) {
			styleName.current = "mega-win";
			setMessage("Mega Win!");
		} else if (multiplier > 200) {
			styleName.current = "super-mega-win";
			setMessage("Super Mega Win!");
		}
	}, [multiplier]);

	return (
		<p className={`${styles.message} ${styles[styleName.current]}`}>
			{message.toUpperCase()}
		</p>
	);
};

export default WinMessage;
