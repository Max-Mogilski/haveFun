import { useState } from "react";
import styles from "./ScratchItemsList.module.scss";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";

const ScratchItemsList = ({ items }) => {
	const [showBar, setShowBar] = useState(true);
	return (
		<div className={styles.container}>
			<button
				onClick={() => setShowBar(!showBar)}
				className={`${!showBar ? styles.rotate : ""} ${styles["button"]}`}
				style={{ right: !showBar ? 0 : "17%" }}>
				<ArrowIcon />
			</button>
			<div
				className={styles["items-list"]}
				style={{ right: !showBar ? "-100%" : 0 }}>
				{items.map((item) => {
					if (!item.multiplier) return null;
					return (
						<div className={styles["item-values"]} key={Math.random()}>
							<div className={styles["item-info"]}>
								<item.image style={{ width: "4rem", padding: "0.1rem" }} />
								<item.image style={{ width: "4rem", padding: "0.1rem" }} />
								<item.image style={{ width: "4rem", padding: "0.1rem" }} />
								<item.image style={{ width: "4rem", padding: "0.1rem" }} />
								<p>x{item.multiplier[3]}</p>
							</div>
							<div className={styles["item-info"]}>
								<item.image style={{ width: "2.5rem", padding: "0.1rem" }} />
								<item.image style={{ width: "2.5rem", padding: "0.1rem" }} />
								<item.image style={{ width: "2.5rem", padding: "0.1rem" }} />
								<p>x{item.multiplier[2]}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ScratchItemsList;
