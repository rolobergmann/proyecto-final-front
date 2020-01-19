import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Avatar from "../../../img/avatarGamer.png";
export var blizzardID;
export var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
export class PlayerData extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			firstname: "",
			lastname: "",
			username: "",
			blizzardID: "",
			image: Avatar,
			bio: "",
			password: ""
		};
	}
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		console.log("email : " + this.state.email);
		console.log("First Name : " + this.state.firstname);
		console.log("Last Name : " + this.state.lastname);
		console.log("User Name : " + this.state.username);
		console.log("Blizzard ID : " + this.state.blizzardID);
		console.log("Avatar : " + this.state.image);
		console.log("Bio : " + this.state.bio);
		console.log("Password: " + this.state.password);
		const url = "http://localhost:3000/signup";
		const data = {
			email: this.state.email,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			username: this.state.username,
			image: this.state.image,
			blizzardID: this.state.blizzardID,
			bio: this.state.bio,
			password: this.state.password
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
				<div className="card mb-6">
					<div className="row no-gutters">
						<div className="col-md-4">
							<img src={this.state.image} className="card-img" alt="..." />
							<div className="container">
								<div className="input-group-prepend">
									<span className="input-group-text">Avatar</span>

									<input
										type="url"
										className="form-control"
										aria-label="Sizing example input"
										aria-describedby="inputGroup-sizing-default"
										name="image"
										onChange={this.handleChange}
									/>
								</div>
							</div>
						</div>
						<div className="col-md-8">
							<div className="card-header">{this.state.username}</div>
							<div className="card-body">
								<p className="card-text">
									<div className="input-group col-md-8">
										<div className="input-group-prepend">
											<span className="input-group-text">Nombre</span>
										</div>
										<input
											type="text"
											className="form-control"
											aria-label="Sizing example input"
											aria-describedby="inputGroup-sizing-default"
											name="firstname"
											onChange={this.handleChange}
										/>
									</div>
								</p>

								<p className="card-text">
									<div className="input-group col-md-8">
										<div className="input-group-prepend">
											<span className="input-group-text">Apellido</span>
										</div>
										<input
											type="text"
											className="form-control"
											aria-label="Sizing example input"
											aria-describedby="inputGroup-sizing-default"
											name="lastname"
											onChange={this.handleChange}
										/>
									</div>
								</p>
								<p className="card-text">
									<div className="input-group col-md-8">
										<div className="input-group-prepend">
											<span className="input-group-text">Nick</span>
										</div>
										<input
											type="text"
											className="form-control"
											aria-label="Sizing example input"
											aria-describedby="inputGroup-sizing-default"
											name="username"
											onChange={this.handleChange}
										/>
									</div>
								</p>
								<p className="card-text">
									<div className="input-group col-md-8">
										<div className="input-group-prepend">
											<span className="input-group-text">Blizzard ID</span>
										</div>
										<input
											type="text"
											className="form-control"
											aria-label="Sizing example input"
											aria-describedby="inputGroup-sizing-default"
											name="blizzardID"
											placeholder="user-1234"
											onChange={this.handleChange}
										/>
									</div>
								</p>

								<p className="card-text">
									<div className="input-group col-md-8">
										<div className="input-group-prepend">
											<span className="input-group-text">Email</span>
										</div>
										<input
											type="email"
											className="form-control"
											aria-label="Sizing example input"
											aria-describedby="inputGroup-sizing-default"
											name="email"
											onChange={this.handleChange}
										/>
									</div>
								</p>

								<p className="card-text">
									<div className="input-group col-md-8">
										<div className="input-group-prepend">
											<span className="input-group-text">Password</span>
										</div>
										<input
											type="password"
											className="form-control"
											aria-label="Sizing example input"
											aria-describedby="inputGroup-sizing-default"
											name="password"
											onChange={this.handleChange}
										/>
									</div>
								</p>
								<p className="card-text">
									<div className="input-group col-md-8">
										<div className="input-group-prepend">
											<span className="input-group-text">Bio</span>
										</div>
										<input
											type="text"
											className="form-control"
											aria-label="Sizing example input"
											aria-describedby="inputGroup-sizing-default"
											name="bio"
											onChange={this.handleChange}
										/>
									</div>
								</p>

								<p className="card-text">
									<div className="input-group col-md-12">
										<input type="submit" value="Crear" />
										<input type="reset" value="Borrar" />
									</div>
								</p>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}
