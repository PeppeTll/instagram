import "./TopBar.css";

//incons
import { CameraIcon, IGTVIcon, LogoIcon, MessangerIcon } from "../../icons";

const TopBar = ({ setSection }) => {
	const onHandleClick = (section) => {
		setSection(section);
	};
	return (
		<div className="TopBar">
			<div className="TopBar__Camera" onClick={() => onHandleClick("camera")}>
				<CameraIcon />
			</div>
			<div className="TopBar__Logo" onClick={() => onHandleClick("home")}>
				<LogoIcon />
			</div>
			<div className="TopBar__Actions">
				<div>
					<IGTVIcon />
				</div>
				<div onClick={() => onHandleClick("message")}>
					<MessangerIcon />
				</div>
			</div>
		</div>
	);
};

export default TopBar;
