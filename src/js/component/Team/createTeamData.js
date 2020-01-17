import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export default class CreateTeam extends React.Component {
	constructor() {
		super();
		this.state = { logo: "", name: "", owner_ID: "", tag: "", game_ID: "" };
	}
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = event => {
		event.preventDefault();
		console.log("Logo : " + this.state.logo);
		console.log("Name : " + this.state.name);
		console.log("Owner ID : " + this.state.owner_ID);
		console.log("Tag : " + this.state.tag);
		console.log("Game ID: " + this.state.game_ID);
		const url = "http://localhost:3000/teams";
		const data = {
			logo: this.state.logo,
			name: this.state.name,
			owner_ID: this.state.owner_ID,
			tag: this.state.tag,
			game_ID: this.state.game_ID
		};
		console.log(data);
		fetch(url, {
			headers: myHeaders,
			method: "POST", // or 'PUT',
			mode: "cors",
			body: JSON.stringify(data) // data can be 'string' or {object}!
		})
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Nombre de tu equipo</label>
				<input type="text" name="name" onChange={this.handleChange} />
				<br />
				<label>Url de tu logo</label>
				<input type="url" name="logo" onChange={this.handleChange} />
				<br />
				<label>ID del Owner</label>
				<input type="text" name="owner_ID" onChange={this.handleChange} />
				<br />
				<label>Tag de tu equipo</label>
				<input type="text" name="tag" onChange={this.handleChange} />
				<br />
				<label>ID del juego de tu equipo</label>
				<input type="text" name="game_ID" onChange={this.handleChange} />
				<br />
				<input type="submit" value="Crear" />
				<input type="reset" value="Borrar" />
			</form>
		);
	}
}
