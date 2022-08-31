import { useState } from "react";
import styles from "./Login.module.scss";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
	};
	return (
		<form className={styles["auth-form"]} onSubmit={handleSubmit}>
			<h2>Login</h2>
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
			<button className="btn">Login</button>
		</form>
	);
};

export default Login;
