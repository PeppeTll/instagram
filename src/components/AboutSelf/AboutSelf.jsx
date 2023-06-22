import { useEffect, useState } from "react";
import "./index.css";

const AboutSelf = () => {
	const [aboutSelf, setAboutSelf] = useState({});

	useEffect(() => {
		fetch("https://api.npoint.io/5d16c60605fa826ce183")
			.then((res) => res.json())
			.then((data) => setAboutSelf(data));
	}, []);

	return (
		<div className="AboutSelf">
			<div className="AboutSelf__avatar">
				<img
					src={aboutSelf.avatar}
					alt={aboutSelf.name}
					className="AboutSelf__avatar--img"
				/>
			</div>
			<div className="AboutSelf__userInfo">
				<div className="AboutSelf__userInfo--name">
					<h3 className="AboutSelf__userInfo--p">Name</h3>
					<p className="AboutSelf__userInfo--json">{aboutSelf.name}</p>
				</div>
				<div className="AboutSelf__userInfo--username">
					<h3 className="AboutSelf__userInfo--p">Username</h3>
					<p className="AboutSelf__userInfo--json">{aboutSelf.username}</p>
				</div>
				<div className="AboutSelf__userInfo--website">
					<h3 className="AboutSelf__userInfo--p">Website</h3>
					<p className="AboutSelf__userInfo--json">{aboutSelf.website}</p>
				</div>
				<div className="AboutSelf__userInfo--bio">
					<h3 className="AboutSelf__userInfo--p">Bio</h3>
					<p className="AboutSelf__userInfo--json">{aboutSelf.bio}</p>
				</div>
				<h3>Private information</h3>
				<div className="AboutSelf__userInfo--email">
					<h3 className="AboutSelf__userInfo--p">Email</h3>
					<p className="AboutSelf__userInfo--json">{aboutSelf.email}</p>
				</div>
				<div className="AboutSelf__userInfo--phone">
					<h3 className="AboutSelf__userInfo--p">Phone</h3>
					<p className="AboutSelf__userInfo--json">{aboutSelf.phone}</p>
				</div>
				<div className="AboutSelf__userInfo--gender">
					<h3 className="AboutSelf__userInfo--p">Gender</h3>
					<p className="AboutSelf__userInfo--json">{aboutSelf.gender}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutSelf;
