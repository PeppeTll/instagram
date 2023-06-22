import { useState } from "react";
import "./Post.css";

import { LikeIcon, CommentIcon, MessangerIcon, VipIcon } from "../../icons";

const Post = ({ post }) => {
	const { is_Like } = post;
	const { likes } = post;
	const { is_saved } = post;
	const { is_verified } = post;

	const [like, setLike] = useState(is_Like);
	const [numbLike, setNumbLikes] = useState(likes);
	const [saved, setSaved] = useState(is_saved);

	const toggleLike = () => {
		setLike(!like);
		setNumbLikes((prev) => (like ? prev - 1 : prev + 1));
	};

	const onHandleSaved = () => {
		setSaved(!saved);
	};

	return (
		<article className="Post">
			<div className="Post__userInfo">
				<figure className="Post__userInfo--figure">
					<img
						className="Post__userInfo--avatar"
						src={post.userAvatar}
						alt={post.username}
					/>
				</figure>
				<div className="Post__userInfo--wrap">
					<h4 className="Post__userInfo--name">
						{post.username} {is_verified && <VipIcon />}
					</h4>
					<p className="Post__userInfo--location">{post.location.name}</p>
				</div>
			</div>
			<img
				src={post.image_url}
				alt={post.location.name}
				className="Post__thumbnail"
			/>
			<div className="Post__Actions">
				<div className="Post__Actions--icons">
					<div onClick={toggleLike} className="PostActions__Like">
						<LikeIcon fill={like && like ? "#FD1D1D" : "#262626"} />
					</div>
					<CommentIcon />
					<MessangerIcon />
				</div>
				<div onClick={onHandleSaved} className="Post__saved">
					{saved ? (
						<i className="fa-solid fa-bookmark"></i>
					) : (
						<i className="fa-regular fa-bookmark"></i>
					)}
				</div>
			</div>
			<div className="Post__infoPost">
				<p className="Post__infoPost--likes">
					Liked by: <b>{post.liked_by[0]?.username}</b> and <b>{numbLike}</b>{" "}
					others
				</p>
				<p className="Post__infoPost--caption">
					<b>{post.username}</b> {post.caption}
				</p>
				<p className="Post__infoPost--hashtag">
					{post.hashtags.map((hash, i) => (
						<span key={i}>#{hash} </span>
					))}
				</p>
				<p className="Post__infoPost--comments">
					View {post.comments.length} comments
				</p>
			</div>
		</article>
	);
};

export default Post;
