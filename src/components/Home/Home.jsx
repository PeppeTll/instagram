import "./index.css";
import { useState, useEffect } from "react";

//mocks
import { storiesData } from "../../mocks/stories";

//components
import Stories from "../Stories";
import Posts from "../Posts";

const Home = () => {
	const [stories, setStories] = useState(storiesData);
	const [post, setPost] = useState(null);

	useEffect(() => {
		fetch("https://api.npoint.io/42312e257d95fa41ddd3")
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, []);

	return (
		<div className="Home">
			<Stories stories={stories} />
			<Posts post={post} />
		</div>
	);
};

export default Home;
//TODO modificare Post
