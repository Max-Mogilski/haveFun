import styles from "./LinkList.module.scss";
import DashboardIcon from "../../../../assets/dashboard_icon.svg";
import UserIcon from "../../../../assets/user.svg";
import SettingsIcon from "../../../../assets/setting.svg";
import MoneyIcon from "../../../../assets/money.svg";
import { NavLink } from "react-router-dom";

const LinkList = ({ handleCloseNav }) => {
	return (
		<nav className={styles.links}>
			<ul>
				<li>
					<NavLink to="/" onClick={handleCloseNav}>
						<img src={DashboardIcon} alt="dashboard icon"></img>
						<span>Games</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/profile" onClick={handleCloseNav}>
						<img src={UserIcon} alt="user icon"></img>
						<span>Profile</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/transactions" onClick={handleCloseNav}>
						<img src={MoneyIcon} alt="transactions icon"></img>
						<span>Transactions</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/settings" onClick={handleCloseNav}>
						<img src={SettingsIcon} alt="settings icon"></img>
						<span>Settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default LinkList;
