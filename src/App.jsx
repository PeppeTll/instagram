import { useState } from "react";
import "./App.css";

// components
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import Camera from "./components/Camera";
import Messaggi from "./components/Messaggi";

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
		}
	};
	return (
		<>
			<TopBar setSection={setSection} />
			{onSectionRender()}
		</>
	);
}

export default App;
