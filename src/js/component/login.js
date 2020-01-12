import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Avatar from "../../img/avatar.png";
import "../../styles/login.scss";

export class Login extends React.Component {
	constructor(props) {
		super(props);
	}

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
					Registro
				</Nav.Link>
				<Modal show={this.state.show} onHide={this.handleClose} animation={true} className="modal-body">
					<Modal.Body>
						<div id="myModal" className="modal-fade">
							<div className="modal-dialog modal-login-new">
								<div className="modal-content">
									<div className="modal-header-new">
										<div className="avatar">
											<img src={Avatar} alt="Avatar" />
											<h4 className="modal-title">Member Login</h4>
											<button
												type="button"
												className="close"
												data-dismiss="modal"
												aria-hidden="true">
												&times;
											</button>
										</div>
										<div className="modal-body">
											<form method="post">
												<div className="form-group">
													<input
														type="text"
														className="form-control-new"
														name="username"
														placeholder="Username"
														required="required"
													/>
												</div>
												<div className="form-group">
													<input
														type="password"
														className="form-control-new"
														name="password"
														placeholder="Password"
														required="required"
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
										</div>
										<div className="modal-footer-new">
											<a href="#">Forgot Password?</a>
										</div>
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
