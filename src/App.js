// React router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// styles
import styles from "./App.module.scss";
// pages&components
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Singup from "./pages/signup/Singup";

function App() {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Sidebar />
				<div className={styles.container}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Singup />} />
						<Route path="profile" element={<Profile />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
