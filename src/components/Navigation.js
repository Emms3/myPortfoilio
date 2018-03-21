import React, { PropTypes } from "react";

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="navMenu">
				{this.props.list.map((item, index) => {
					return (
						<li key={index} className="navItems">
							{item}
						</li>
					);
				})}
			</ul>
		);
	}
}
