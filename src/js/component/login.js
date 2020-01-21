import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Avatar from "../../img/avatar.png";
import "../../styles/login.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authenticationService } from "./auth/authentication.service";
import PropTypes from "prop-types";

class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		// redirect to home if already logged in
		if (authenticationService.currentUserValue) {
			this.props.history.push("/");
		}
	}
<<<<<<< HEAD
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
=======
>>>>>>> c4ec104a2e14465f6505d09036ab38672a459104

	render() {
		return (
			<div>
				<div className="alert alert-info">
					Username: test@test.com
					<br />
					Password: Test01234
				</div>
				<h2>Login</h2>
				<Formik
					initialValues={{
						username: "",
						password: ""
					}}
					validationSchema={Yup.object().shape({
						username: Yup.string().required("Username is required"),
						password: Yup.string().required("Password is required")
					})}
					onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
						setStatus();
						authenticationService.login(username, password).then(
							user => {
								const { from } = this.props.location.state || { from: { pathname: "/" } };
								this.props.history.push(from);
							},
							error => {
								setSubmitting(false);
								setStatus(error);
							}
						);
					}}
					render={({ errors, status, touched, isSubmitting }) => (
						<Form>
							<div className="form-group">
								<label htmlFor="username">Username</label>
								<Field
									name="username"
									type="text"
									className={
										"form-control" + (errors.username && touched.username ? " is-invalid" : "")
									}
								/>
								<ErrorMessage name="username" component="div" className="invalid-feedback" />
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<Field
									name="password"
									type="password"
									className={
										"form-control" + (errors.password && touched.password ? " is-invalid" : "")
									}
								/>
								<ErrorMessage name="password" component="div" className="invalid-feedback" />
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary" disabled={isSubmitting}>
									Login
								</button>
								{isSubmitting && (
									<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
								)}
							</div>
							<div>
								<a href="/register">Crear una cuenta</a>
							</div>
							{status && <div className={"alert alert-danger"}>{status}</div>}
						</Form>
					)}
				/>
			</div>
		);
	}
}

LoginPage.propTypes = {
	history: PropTypes.any,
	location: PropTypes.any
};

export { LoginPage };
