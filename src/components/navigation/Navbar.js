//styles
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import { useLogout } from "../../hooks/auth/useLogout";
import styles from "./Navbar.module.scss";
const Navbar = () => {
	const { user } = useAuthContext();
	const { logout } = useLogout();
	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles.logo}>
					<Link to="/">
						have<span>Fun</span>
					</Link>
				</li>
				{!user && (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/signup">Signup</Link>
						</li>
					</>
				)}
				{user && (
					<button className="btn" onClick={logout}>
						Logout
					</button>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
