import "./index.css";

const Conversation = ({ message }) => {
	console.log(message.messages);
	return (
		<div className="Conversation">
			{message.messages.map((chat) => (
				<div
					className={chat.sender === "John" ? "sender" : "Conversation__chat"}
				>
					<p className="Conversation__sender">{chat.sender}</p>
					<p className="Conversation__content">{chat.content}</p>
					<p className="Conversation__timeStamp">{chat.timestamp}</p>
					{chat.is_read ? (
						<i class="fa-solid fa-check-double read"></i>
					) : (
						<i class="fa-solid fa-check"></i>
					)}
				</div>
			))}
		</div>
	);
};

export default Conversation;
