import { useState } from "react";
import "./App.css";

// components
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import Camera from "./components/Camera";
import Messaggi from "./components/Messaggi";
import BottomBar from "./components/BottomBar";
import AboutSelf from "./components/AboutSelf";

function App() {
	const [section, setSection] = useState("home");

	const onSectionRender = () => {
		switch (section) {
			case "home":
				return <Home />;
			case "camera":
				return <Camera />;
			case "message":
				return <Messaggi />;
			case "self":
				return <AboutSelf />;
		}
	};
	return (
		<div className="App">
			<TopBar setSection={setSection} />
			{onSectionRender()}
			<BottomBar setSection={setSection} />
		</div>
	);
}

export default App;
