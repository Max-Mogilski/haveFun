import { useState } from "react";
import { useLogin } from "../../hooks/auth/useLogin";
import styles from "./Login.module.scss";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, isPending, error } = useLogin();
	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
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
			{!isPending && <button className="btn">Login</button>}
			{isPending && (
				<button className="btn" disabled>
					Loading...
				</button>
			)}
			{error && <p className="error">{error}</p>}
		</form>
	);
};

export default Login;
