import "./index.css";

const MessagePrev = ({ message }) => {
	return (
		<div className="MessagePrev">
			<img src={message.participants[1].avatar_url} alt={message.username} />
			<p>
				{message.messages.at(-1).content} {message.last_message_timestamp}
			</p>
		</div>
	);
};

export default MessagePrev;
