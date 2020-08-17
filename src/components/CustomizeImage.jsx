import React, { Component } from "react";

export class CustomizeImage extends Component {
	state = {
		size: 20,
		url:
			"https://www.carrefour.fr/media/1500x1500/Photosite/PGC/P.L.S./3329770063273_PHOTOSITE_20200630_164015_0.jpg?placeholder=1",
	};

	handleChange = (event) => {
		let value = event.target.value;
		let key = event.target.name;
		this.setState({ [key]: value });
	};

	render() {
		const { size, url } = this.state;
		return (
			<div>
				<h1>Custom Image</h1>
				<input
					type="text"
					name="url"
					placeholder="img src"
					onChange={this.handleChange}
				/>
				<input
					type="range"
					min="0"
					max="200"
					name="size"
					onChange={this.handleChange}
				/>
				<p>
					{size} x {size} px
				</p>
				<img src={url} alt="pic" style={{ height: `${size}px` }} />
			</div>
		);
	}
}

export default CustomizeImage;
