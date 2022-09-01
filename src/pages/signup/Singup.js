import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Singup.module.scss";

const Singup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [passwordMatch, setPasswordMatch] = useState(true);
	const { signup } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			signup(email, password, displayName);
			setPasswordMatch(true);
		} else {
			setPasswordMatch(false);
		}
	};
	return (
		<form onSubmit={handleSubmit} className={styles["auth-form"]}>
			<h2>Signup</h2>
			<label>
				<span>email:</span>
				<input
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
				/>
			</label>
			<label>
				<span>password:</span>
				<input
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
				/>
			</label>
			<label>
				<span>confirm password:</span>
				<input
					required
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					type="password"
				/>
			</label>
			<label>
				<span>display name:</span>
				<input
					required
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
					type="text"
				/>
			</label>
			<button className="btn">Signup</button>
			{!passwordMatch && <p className="error">Passwords do not match</p>}
		</form>
	);
};

export default Singup;
