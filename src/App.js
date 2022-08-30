// React router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// styles
import "./App.scss";
// pages&components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Singup from "./pages/signup/Singup";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="singup" element={<Singup />} />
					<Route path="profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
