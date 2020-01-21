import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Avatar from "../../img/avatar.png";
import "../../styles/login.scss";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = { email: "", password: "" };
	}
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = event => {
		event.preventDefault();
		console.log("Email: " + this.state.email);
		console.log("Password: " + this.state.password);
		const url = "http://localhost:3000/signup";
		const data = {
			email: this.state.email,
			password: this.state.password
		};
		console.log(data);
		fetch(url, {
			headers: myHeaders,
			method: "POST", // or 'PUT',
			mode: "no-cors",
			body: JSON.stringify(data) // data can be 'string' or {object}!
		})
			.then(response => response.text())
			.then(result => {
				console.log(result);
				if (result.status === 201) {
					setAuthTokens(result.data);
					setLoggedIn(true);
				} else {
					setIsError(true);
				}
			})
			.catch(error => console.log("error", error));
	};
	state = {
		handleClose: false,
		handleShow: false,
		show: false
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	handleShow = () => {
		this.setState({ show: true });
	};

	render() {
		return (
			<>
				<Nav.Link eventKey="link-1" onClick={() => this.handleShow()}>
					Login
				</Nav.Link>
				<Modal show={this.state.show} onHide={this.handleClose} animation={true} size="sm">
					<Modal.Header closeButton>
						<Modal.Title>Login de Usuario</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div id="myModal" className="modal-fade">
							<div className="modal-dialog modal-login-new">
								<div className="modal-content">
									<form onSubmit={this.handleSubmit}>
										<div className="form-group">
											<input
												type="text"
												className="form-control-new"
												name="email"
												placeholder="Email"
												required="required"
												onChange={this.handleChange}
											/>
										</div>
										<div className="form-group">
											<input
												type="password"
												className="form-control-new"
												name="password"
												placeholder="Password"
												required="required"
												onChange={this.handleChange}
											/>
										</div>
										<div className="form-group">
											<button
												type="submit"
												className="btn-new btn-new-primary btn-new-lg btn-new-block login-btn-new">
												Login
											</button>
										</div>
									</form>
									<div className="modal-footer-new">
										<a href="#">Forgot Password?</a>
									</div>
								</div>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}
