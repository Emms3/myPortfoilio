import React, { PropTypes } from "react";

import Navigation from "./Navigation";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let items = ["HOME", "WORK", "LAB", "ABOUT"];
		return (
			<div className="home">
				{/* <Navigation list={items} /> */}
				<div className="homeContainer">
					<h1>HELLO</h1>
					<h1>I'm Mohammed</h1>
					<p className="likes">
						I am a creative web developer <br />
						I stand on a sweet spot where {"{ "}
						<span className="design">{"DESIGN "}</span>
						&
						<span className="code">{" CODE"}</span>
						{" } "}
						intersect.
					</p>
				</div>
			</div>
		);
	}
}
