// game one
import { ReactComponent as DiamondIcon } from "../assets/game-one/diamond.svg";
import { ReactComponent as MoneyIcon } from "../assets/game-one/money.svg";
import { ReactComponent as CoinIcon } from "../assets/game-one/coin.svg";
import { ReactComponent as PiggyIcon } from "../assets/game-one/piggy.svg";

// game two
import { ReactComponent as CherryIcon } from "../assets/game-two/cherry.svg";
import { ReactComponent as StrawberryIcon } from "../assets/game-two/strawberry.svg";
import { ReactComponent as GrapesIcon } from "../assets/game-two/grapes.svg";
import { ReactComponent as TomatoIcon } from "../assets/game-two/tomato.svg";

// game three
import { ReactComponent as StratocasterIcon } from "../assets/game-three/stratocaster.svg";
import { ReactComponent as AmpIcon } from "../assets/game-three/amp.svg";
import { ReactComponent as EffectIcon } from "../assets/game-three/effect.svg";
import { ReactComponent as PickIcon } from "../assets/game-three/guitar-pick.svg";

export const gameOne = [
	{
		name: "diamond",
		image: DiamondIcon,
		chances: 4,
		multiplier: [0, 0, 300, 500],
	},
	{
		name: "moneyCoin",
		image: CoinIcon,
		chances: 20,
		multiplier: [0, 0, 50, 100],
	},
	{
		name: "money",
		image: MoneyIcon,
		chances: 30,
		multiplier: [0, 0, 5, 10],
	},
	{ name: "piggy", image: PiggyIcon, chances: 60 },
];

export const gameTwo = [
	{
		name: "cherry",
		image: CherryIcon,
		chances: 4,
		multiplier: [0, 0, 300, 500],
	},
	{
		name: "strawberry",
		image: StrawberryIcon,
		chances: 20,
		multiplier: [0, 0, 50, 100],
	},
	{
		name: "grape",
		image: GrapesIcon,
		chances: 30,
		multiplier: [0, 0, 5, 10],
	},
	{ name: "tomato", image: TomatoIcon, chances: 60 },
];

export const gameThree = [
	{
		name: "stratocaster",
		image: StratocasterIcon,
		chances: 4,
		multiplier: [0, 0, 300, 500],
	},
	{
		name: "gibson",
		image: AmpIcon,
		chances: 20,
		multiplier: [0, 0, 50, 100],
	},
	{
		name: "sg",
		image: EffectIcon,
		chances: 30,
		multiplier: [0, 0, 5, 10],
	},
	{ name: "banjo", image: PickIcon, chances: 60 },
];
