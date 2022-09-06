import styles from "./Sidebar.module.scss";
import DashboardIcon from "../../assets/dashboard_icon.svg";
import UserIcon from "../../assets/user.svg";
import UserStarterAvatar from "../../assets/user-start.svg";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { ReactComponent as AddIcon } from "../../assets/add.svg";
import { useUserDataContext } from "../../hooks/data/useUserDataContext";
import MoneyIcon from "../../assets/money.svg";

const Sidebar = () => {
	const { document } = useUserDataContext();

	return (
		<div className={styles.sidebar}>
			<div className={styles["sidebar-content"]}>
				<div className={styles.user}>
					{document && (
						<Avatar
							src={document.photoURL ? document.photoURL : UserStarterAvatar}
						/>
					)}
					{!document && <Avatar src="loading" />}
					<p className={styles.name}>
						Hello {document && document.displayName}
					</p>
					<div className={styles["balance-content"]}>
						<p className={styles.balance}>
							Balance: {document && document.balance.toFixed(2)}$
						</p>
						<Link to={"/transactions"}>
							<AddIcon fill="#fff" className={styles["add-icon"]} />
						</Link>
					</div>
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
						<li>
							<NavLink to="/transactions">
								<img src={MoneyIcon} alt="user icon"></img>
								<span>Transactions</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
