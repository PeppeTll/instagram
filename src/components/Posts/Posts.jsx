import "./Posts.css";

import Post from "../Post";

const Posts = ({ post }) => {
	return (
		<div>
			<ul>
				{post?.map((post) => (
					<li key={post?.id}>
						<Post post={post} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;
