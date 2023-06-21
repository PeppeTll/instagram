import "./index.css";
import { useState } from "react";

//Components
import Conversation from "../Conversation";

const MessagePrev = ({ message }) => {
	const [modal, setModal] = useState(false);

	const onHandleModal = () => {
		setModal(!modal);
	};

	return (
		<div className="MessagePrev" onClick={onHandleModal}>
			{modal && <Conversation message={message} />}
			<figure className="MessagePrev__figure">
				<img
					className="MessagePrev__image"
					src={message.participants[1].avatar_url}
					alt={message.username}
				/>
			</figure>
			<p className="MesssagePrev__lastMessage">
				{message.messages.at(-1).content} {message.last_message_timestamp}
			</p>
		</div>
	);
};

export default MessagePrev;
