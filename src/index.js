import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { NotificationContextProvider } from "./context/NotificationContext";
import { UserDataContextProvider } from "./context/UserDataContext";
import { CurrentGameContextProvider } from "./context/CurrentGameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthContextProvider>
		<UserDataContextProvider>
			<NotificationContextProvider>
				<CurrentGameContextProvider>
					<App />
				</CurrentGameContextProvider>
			</NotificationContextProvider>
		</UserDataContextProvider>
	</AuthContextProvider>
);
