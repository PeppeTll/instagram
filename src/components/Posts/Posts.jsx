import "./Posts.css";

import Post from "../Post";

const Posts = ({ post }) => {
	return (
		<div>
			<ul>
				{post?.map((post) => (
					<li key={post?.post_id}>
						<Post post={post} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;
