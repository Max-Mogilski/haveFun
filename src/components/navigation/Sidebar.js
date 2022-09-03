import styles from "./Sidebar.module.scss";
import DashboardIcon from "../../assets/dashboard_icon.svg";
import UserIcon from "../../assets/user.svg";
import UserStarterAvatar from "../../assets/user-start.svg";
import { NavLink } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import { useDocument } from "../../hooks/data/useDocument";

const Sidebar = () => {
	const { user } = useAuthContext();
	const { document } = useDocument("users", user.uid);

	return (
		<div className={styles.sidebar}>
			<div className={styles["sidebar-content"]}>
				<div className={styles.user}>
					<Avatar
						src={
							document && document.photoURL
								? document.photoURL
								: UserStarterAvatar
						}
					/>
					<p className={styles.name}>
						Hello {document && document.displayName}
					</p>
					<p className={styles.balance}>
						Balance: {document && document.balance.toFixed(2)}$
					</p>
				</div>
				<nav className={styles.links}>
					<ul>
						<li>
							<NavLink to="/">
								<img src={DashboardIcon} alt="dashboard icon"></img>
								<span>Games</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/profile">
								<img src={UserIcon} alt="user icon"></img>
								<span>Profile</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
