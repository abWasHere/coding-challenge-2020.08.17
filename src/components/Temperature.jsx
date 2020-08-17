import React, { Component } from "react";

export class Temperature extends Component {
    state = { temperature: null };
    
    handleChange = (event) => {
        let value = event.target.value;
        console.log(value);
        this.setState({temperature : value})
    }

	render() {
        const {temperature} =  this.state;
		return (
			<div>
				<h1>Temperature</h1>
				<input
					onChange={this.handleChange}
					type="number"
					name="temperature"
					placeholder="temperature in °C"
				/>
				{temperature < 10 && (
					<p style={{ color: "blue" }}>It's cold ❄️</p>
				)}
				{temperature >= 30 && (
					<p style={{ color: "red" }}>It's warm ☀️</p>
				)}
				{(temperature >= 10 && temperature < 30) && (
					<p>It's nice 🌼</p>
				)}
			</div>
		);
	}
}

export default Temperature;

// This component should render:

// An input so that the user can type a temperature, in Celsius
// A text that changes based on the temperature:
// When the temperature is lower than 10 => "It's cold ❄️" (in blue)
// When the temperature is between 10 and 30 => "It's nice 🌼" (in black)
// When the temperature is above 30 => "It's warm ☀️" (in red)
// For this task, you need only 1 state temperature
