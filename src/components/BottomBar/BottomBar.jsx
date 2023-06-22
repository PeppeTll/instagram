import "./index.css";
import {
	AvatarIcon,
	HomeIcon,
	LikeIcon,
	SearchIcon,
	ShapeIcon,
} from "../../icons";

const BottomBar = ({ setSection }) => {
	const onHandleClick = (section) => {
		setSection(section);
	};

	return (
		<div className="BottomBar">
			<div className="BottomBar__home" onClick={() => onHandleClick("home")}>
				<HomeIcon />
			</div>
			<div
				className="BottomBar__search"
				onClick={() => onHandleClick("search")}
			>
				<SearchIcon />
			</div>
			<div className="BottomBar__shape" onClick={() => onHandleClick("shape")}>
				<ShapeIcon />
			</div>
			<div className="BottomBar__likes" onClick={() => onHandleClick("likes")}>
				<LikeIcon fill={"#262626"} />
			</div>
			<div className="BottomBar__avatar" onClick={() => onHandleClick("self")}>
				<AvatarIcon />
			</div>
		</div>
	);
};

export default BottomBar;
