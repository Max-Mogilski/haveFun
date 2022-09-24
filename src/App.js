import React from "react";
// React router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// styles
import styles from "./App.module.scss";
// pages&components
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/sidebar/Sidebar";
import Notification from "./components/notification/Notification";
import ScratchCardGame from "./games/scratchCard/ScratchCardGame";
import AddTransaction from "./pages/addTransaction/AddTransaction";
import ScratchCardList from "./pages/home/games/scratch-card/scratch-card-list/ScratchCardList";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Singup from "./pages/signup/Singup";
import Transactions from "./pages/transactions/Transactions";
// hooks
import { useNotificationContext } from "./hooks/notification/useNotificationContext";
import { useAuthContext } from "./hooks/auth/useAuthContext";
//game items
import {
	gameOne,
	gameTwo,
	gameThree,
} from "./games-data/scratch-card/data/items";
import { useUserDataContext } from "./hooks/data/useUserDataContext";
import GameResult from "./pages/home/game-result/GameResult";
import { useCurrentGameContex } from "./hooks/games/useCurrentGameContex";
import Profile from "./pages/profile/Profile";

function App() {
	const { user, authIsReady } = useAuthContext();
	const { notification, dispatchNotification } = useNotificationContext();
	const { isAllowedToPlay } = useUserDataContext();
	const { showResult } = useCurrentGameContex();

	return (
		<div className={styles.app}>
			{authIsReady && (
				<BrowserRouter>
					{user && <Sidebar />}
					{showResult && <GameResult />}
					<div className={styles.container}>
						<Navbar />
						<Routes>
							{user ? (
								<>
									<Route path="/" element={<Home />} />
									<Route path="profile/:id" element={<Profile />} />
									<Route
										path="scratch-card-list"
										element={<ScratchCardList />}
									/>
									{isAllowedToPlay ? (
										<>
											<Route
												path="/scratch-card-20"
												element={
													<ScratchCardGame
														items={gameOne}
														length={9}
														options={{
															backGroundColor: "#8d69f1",
															tilesColor: "#8d69f1",
															title: "Scratch me!",
															titleColor: "#fff",
															borderColor: "#000",
														}}
													/>
												}
											/>
											<Route
												path="/scratch-card-50"
												element={
													<ScratchCardGame
														items={gameTwo}
														length={9}
														options={{
															backGroundColor: "#fc466b",
															tilesColor: "#fc466b",
															title: "Scratch me!",
															titleColor: "#fff",
															borderColor: "#000",
														}}
													/>
												}
											/>
											<Route
												path="/scratch-card-100"
												element={
													<ScratchCardGame
														items={gameThree}
														length={9}
														options={{
															backGroundColor: "#3f5efb",
															tilesColor: "#3f5efb",
															title: "Scratch me!",
															titleColor: "#fff",
															borderColor: "#000",
														}}
													/>
												}
											/>
										</>
									) : (
										<>
											<Route
												path="/scratch-card-20"
												element={<Navigate to="/scratch-card-list" />}
											/>
											<Route
												path="/scratch-card-50"
												element={<Navigate to="/scratch-card-list" />}
											/>
											<Route
												path="/scratch-card-100"
												element={<Navigate to="/scratch-card-list" />}
											/>
										</>
									)}
									<Route path="slot-machine" element={<Navigate to="/" />} />
									<Route path="lucky-wheel" element={<Navigate to="/" />} />
									<Route path="transactions" element={<Transactions />} />
									<Route path="transactions/add" element={<AddTransaction />} />
									<Route path="settings" element={<Settings />} />
								</>
							) : (
								<>
									<Route path="/" element={<Navigate to="/login" />} />
									<Route
										path="scratch-card"
										element={<Navigate to="/login" />}
									/>
									<Route path="/settings" element={<Navigate to="/login" />} />
									<Route
										path="transactions"
										element={<Navigate to="/login" />}
									/>
									<Route
										path="transactions/add"
										element={<Navigate to="/login" />}
									/>
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
					{notification && (
						<Notification
							notificationObj={notification}
							dispatchNotification={dispatchNotification}
						/>
					)}
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
