import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import Avatar from "../../avatar/Avatar";
import { ReactComponent as AddIcon } from "../../../assets/add.svg";
import { useUserDataContext } from "../../../hooks/data/useUserDataContext";
import { ReactComponent as MobileNavIcon } from "../../../assets/mobile-nav.svg";
import { ReactComponent as CloseNavIcon } from "../../../assets/close.svg";
import { useState } from "react";

import LinkList from "./link-list/LinkList";

const Sidebar = () => {
	const { document } = useUserDataContext();
	const [showSideBar, setShowSideBar] = useState(false);

	const handleCloseNav = () => {
		setShowSideBar(false);
	};

	return (
		<div className={styles.sidebar}>
			<div
				className={styles["sidebar-content"]}
				style={{
					display: showSideBar || window.innerWidth > 600 ? "block" : "none",
				}}>
				<div className={styles.user}>
					{document.photoURL ? (
						<Avatar src={document.photoURL} />
					) : (
						<Avatar src="loading" />
					)}
					<p className={styles.name}>
						Hello {document && document.displayName}
					</p>
					<div className={styles["balance-content"]}>
						<p className={styles.balance}>
							Balance: {document && document.balance}$
						</p>
						<Link to={"/transactions"} onClick={handleCloseNav}>
							<AddIcon fill="#fff" className={styles["add-icon"]} />
						</Link>
					</div>
				</div>
				<LinkList handleCloseNav={handleCloseNav} />
			</div>
			<div
				className={styles["mobile-sidebar"]}
				onClick={() => setShowSideBar((prev) => !prev)}>
				{!showSideBar && <MobileNavIcon />}
				{showSideBar && <CloseNavIcon fill="#ffffff" width={40} />}
			</div>
		</div>
	);
};

export default Sidebar;
