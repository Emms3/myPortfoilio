import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home";
import Skills from "./components/Skills";

class App extends Component {
	render() {
		return (
			<div>
				<Home />
				<Skills />
			</div>
		);
	}
}

export default App;
