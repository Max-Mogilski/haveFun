import { Link } from "react-router-dom";
import { ACTIONS } from "../../../actions/notification/Actions";
import { useUserDataContext } from "../../../hooks/data/useUserDataContext";
import { useNotificationContext } from "../../../hooks/notification/useNotificationContext";
import styles from "./GameCard.module.scss";

const GameCard = ({ game, action }) => {
	const { document } = useUserDataContext();
	const { dispatchNotification } = useNotificationContext();
	const balanceFallback = () => {
		dispatchNotification({
			type: ACTIONS.ERROR,
			payload: "You don't have enough money to play this game!",
		});
	};
	return (
		<div
			className={styles["game-card"]}
			onClick={game.price && game.price > document.balance && balanceFallback}>
			{game.price <= document.balance || !game.price ? (
				<Link
					to={game.isReady ? game.ref : ""}
					className={styles["link"]}
					onClick={action}></Link>
			) : (
				""
			)}
			<img src={game.photoURL} alt="game icon" />
			<p>{game.title}</p>
		</div>
	);
};

export default GameCard;
