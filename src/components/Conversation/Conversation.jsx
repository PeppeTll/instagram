import "./index.css";

const Conversation = ({ message }) => {
	console.log(message.messages);
	return (
		<div className="Conversation">
			{message.messages.map((chat) => (
				<div
					key={chat.id}
					className={chat.sender === "John" ? "sender" : "Conversation__chat"}
				>
					<p className="Conversation__sender">{chat.sender}</p>
					<p className="Conversation__content">{chat.content}</p>
					<p className="Conversation__timeStamp">
						{chat.timestamp}{" "}
						{chat.is_read ? (
							<i className="fa-solid fa-check-double read"></i>
						) : (
							<i className="fa-solid fa-check"></i>
						)}
					</p>
				</div>
			))}
		</div>
	);
};

export default Conversation;
