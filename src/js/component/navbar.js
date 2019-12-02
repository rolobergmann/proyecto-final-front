import React, { Component } from "react";
import { Nav, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Login } from "./login";
import Logo from "../../img/logo.png";

export class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};
	}

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<Container>
				<Nav
					className="justify-content-between navbar navbar-light bg-light fixed-top"
					defaultActiveKey="/home"
					as="ul"
					variant="primary">
					<Nav.Item className="navbar-brand">{<img src={Logo} />}</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link href="/">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link href="link-1">Teams</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link href="/player">Profile</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link href="/admin">{this.props.test}</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li" className="justify-content-end">
						{" "}
						<Login />
						<Nav.Item />
					</Nav.Item>
				</Nav>
			</Container>
		);
	}
}

Navbar.propTypes = {
	test: PropTypes.string,
	test2: PropTypes.string
};
