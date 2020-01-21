import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Avatar from "../../../img/avatarGamer.png";
import { authenticationService } from "../auth/authentication.service";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export var blizzardID;
export var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
class PlayerEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: authenticationService.currentUserValue
		};
	}
	handleHideEdit = () => {
		this.setState({
			editMode: false
		});
	};
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.history.goBack();
		console.log("email : " + this.state.email);
		console.log("First Name : " + this.state.firstname);
		console.log("Last Name : " + this.state.lastname);
		console.log("User Name : " + this.state.username);
		console.log("Blizzard ID : " + this.state.blizzardID);
		console.log("Avatar : " + this.state.image);
		console.log("Bio : " + this.state.bio);
		console.log("Password: " + this.state.password);
		const url = "http://localhost:3000/user/edit/" + this.state.currentUser.user.id;
		const data = {
			email: this.state.email,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			username: this.state.username,
			image: this.state.image,
			blizzardID: this.state.blizzardID,
			bio: this.state.bio,
			password: this.state.password,
			editMode: false
		};
		console.log(data);
		fetch(url, {
			headers: myHeaders,
			method: "PUT", // or 'PUT',
			mode: "cors",
			body: JSON.stringify(data) // data can be 'string' or {object}!
		})
			.then(response => response.json())
			.then(data => console.log("data is", data))
			.catch(error => console.log("error is", error));
	};

	render() {
		const userEdit = this.state.currentUser.user;
		console.log(this.state.currentUser);
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="card mb-6">
					<div className="card-header">Edit + {userEdit.username}</div>
					<div className="row no-gutters">
						<div className="col-md-4">
							<img src={userEdit.image} className="card-img" alt="..." />
							<div className="container">
								<div className="input-group-prepend">
									<span className="input-group-text">Avatar</span>

									<input
										type="url"
										defaultValue={userEdit.image}
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
							<div className="card-body">
								<p className="card-text">
									<div className="input-group col-md-8">
										<div className="input-group-prepend">
											<span className="input-group-text">Nombre</span>
										</div>
										<input
											type="text"
											defaultValue={userEdit.first_name}
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
											defaultValue={userEdit.last_name}
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
											<span className="input-group-text">User Name</span>
										</div>
										<input
											type="text"
											defaultValue={userEdit.username}
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
											defaultValue={userEdit.blizzardID}
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
											defaultValue={userEdit.email}
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
											placeholder="Ingrese su password"
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
											defaultValue={userEdit.bio}
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
										<input type="submit" value="Guardar" />
										<input type="reset" value="Deshacer Cambios" />
										<a href="/player">
											<input type="button" value="Volver" />
										</a>
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
PlayerEdit.propTypes = {
	history: PropTypes.any,
	location: PropTypes.any
};
export default withRouter(PlayerEdit);
