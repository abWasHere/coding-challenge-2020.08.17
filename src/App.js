import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavMain from "./components/NavMain";
import Home from "./components/Home";
import Temperature from "./components/Temperature";
import CustomizeImage from "./components/CustomizeImage";

function App() {
	return (
		<div className="App">
			<NavMain />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/temperature" component={Temperature} />
				<Route exact path="/customize-image" component={CustomizeImage} />
			</Switch>
		</div>
	);
}

export default App;
