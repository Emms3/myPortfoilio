import React, { PropTypes } from "react";

export default class CodeLike extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="codeLike">
				<p>
					{"\t{"}{" "}
					<span className="keyword_comment">
						{this.props.comment}
					</span>
					<br />
					{"\t\t"}
					<span className="keyword_string">"name"</span>
					:&nbsp;<span className="keyword_string">
						"{this.props.lang}"
					</span>
					<span>
						,<br />
					</span>
					<span className="keyword_string">{"\t\t"}"value"</span>
					:&nbsp;<span className="keyword_integer">
						{this.props.value}
					</span>
					<br />
					{"\t"}
					{this.props.howToClose}
				</p>
			</div>
		);
	}
}
