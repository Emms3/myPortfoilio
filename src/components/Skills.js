import React, { PropTypes } from "react";

import SkillsScene from "./SkillsScene";
import CodeLike from "./CodeLike";

export default class Skills extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="skillsContainer">
				<div className="skillsLeft">
					<p className="whiteText">[</p>
					<CodeLike lang={"HTML5"} value={100} howToClose={"},"} />
					<CodeLike lang={"CSS3"} value={100} howToClose={"},"} />
					<CodeLike
						lang={"PHP & MySQL"}
						value={90}
						howToClose={"},"}
					/>
					<CodeLike
						lang={"JavaScript"}
						value={80}
						howToClose={"},"}
					/>
					<CodeLike
						lang={"React.js & React Native"}
						value={80}
						howToClose={"},"}
					/>
					<CodeLike lang={"THREE.js"} value={50} howToClose={"},"} />
					<CodeLike lang={"Node.js"} value={50} howToClose={"}"} />
					<p className="whiteText">]</p>
				</div>
				<div className="skillsRight">
					<div className="skillsRightConatiner">
						<SkillsScene width={800} height={600} />
					</div>
				</div>
			</div>
		);
	}
}
