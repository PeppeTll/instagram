import "./index.css";
import { useEffect, useState } from "react";

//components
import MessagePrev from "../MessagePrev";

const Messaggi = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		fetch("https://api.npoint.io/45615d0ddef177eef95b")
			.then((res) => res.json())
			.then((data) => setMessages(data.messageList));
	}, []);

	return (
		<div className="Messaggi">
			{messages.map((message) => (
				<MessagePrev key={message.id} message={message} />
			))}
			;
		</div>
	);
};

export default Messaggi;
