import { useState } from "react";
import "./Post.css";

import { LikeIcon } from "../../icons";

const Post = ({ post }) => {
	const { isLike } = post;
	const { likes } = post;
	const { is_saved } = post;
	const { is_verified } = post;

	const [like, setLike] = useState(isLike);
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
			<div className="PostTop">
				<div className="PostTop__User">
					<div className="User__Image">
						<img
							src={`https://robohash.org/${post?.username}.png`}
							alt={post?.username}
						/>
					</div>
					<div className="User__Content">
						<p className="User__Username">
							{post?.username}{" "}
							{is_verified ? (
								<span>
									<i className="fa-solid fa-certificate blue"></i>
								</span>
							) : (
								""
							)}
						</p>
						<p className="User__Location">{post?.location}</p>
					</div>
				</div>
			</div>
			<div className="PostTop__caption">
				<p>{post?.caption}</p>
			</div>
			<div className="PostContent">
				<img className="Post__img" src={post?.image_url} alt={post?.location} />
			</div>
			<div className="PostActions">
				<div onClick={() => toggleLike()} className="PostActions__Like">
					<LikeIcon fill={like && like ? "#FD1D1D" : "#262626"} />
					<span>{numbLike}</span>
				</div>
				<div onClick={onHandleSaved} className="Post__saved">
					{saved ? (
						<i className="fa-solid fa-bookmark"></i>
					) : (
						<i className="fa-regular fa-bookmark"></i>
					)}
				</div>
			</div>
		</article>
	);
};

export default Post;
