import "./index.css";
import { useState } from "react";

//Components
import Conversation from "../Conversation";
import { CameraIcon } from "../../icons";

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
					alt={message.participants[1].username}
				/>
			</figure>
			<div className="MessagePrev__info">
				<p className="MessagePrev__userName">
					{message.participants[1].username}
				</p>
				<p className="MesssagePrev__lastMessage">
					{`${message.messages.at(-1).content.slice(0, 20)}...`}{" "}
					{message.last_message_timestamp}
				</p>
			</div>
			<CameraIcon />
		</div>
	);
};

export default MessagePrev;
