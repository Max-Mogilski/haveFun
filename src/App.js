// React router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// styles
import styles from "./App.module.scss";
// pages&components
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import { useAuthContext } from "./hooks/auth/useAuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Singup from "./pages/signup/Singup";

function App() {
	const { user, authIsReady } = useAuthContext();

	return (
		<div className={styles.app}>
			{authIsReady && (
				<BrowserRouter>
					{user && <Sidebar />}
					<div className={styles.container}>
						<Navbar />
						<Routes>
							{user ? (
								<>
									<Route path="/" element={<Home />} />
									<Route path="profile" element={<Profile />} />
								</>
							) : (
								<>
									<Route path="/" element={<Navigate to="/login" />} />
									<Route path="/profile" element={<Navigate to="/login" />} />
								</>
							)}
							{!user ? (
								<>
									<Route path="login" element={<Login />} />
									<Route path="signup" element={<Singup />} />
								</>
							) : (
								<>
									<Route path="/login" element={<Navigate to="/" />} />
									<Route path="/signup" element={<Navigate to="/" />} />
								</>
							)}
						</Routes>
					</div>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
