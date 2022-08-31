//styles
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles.logo}>
					{/* <img /> */}
					<Link to="/">
						have<span>Fun</span>
					</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/signup">Signup</Link>
				</li>
				<button className="btn">Logout</button>
			</ul>
		</nav>
	);
};

export default Navbar;
