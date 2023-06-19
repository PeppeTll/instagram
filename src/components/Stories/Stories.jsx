import { useState } from "react";

import "./Stories.css";

// components
import Story from "../Story";

const Stories = ({ stories }) => {
	return (
		<div className="Stories">
			<ul className="Stories__List">
				{stories &&
					stories.map((story) => (
						<li className="Stories__Item" key={story.id}>
							<Story story={story} />
						</li>
					))}
			</ul>
		</div>
	);
};

export default Stories;
