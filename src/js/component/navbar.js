import React, { Component } from "react";
import { Nav, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/navbar.scss";
import { Login } from "./login";
import Logo from "../../img/logonar.png";

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
			<div className="nav-links">
				<Nav className="justify-content-between navbar fixed-top" defaultActiveKey="/home" as="ul">
					<Nav.Item className="navbar-brand">{<img src={Logo} height="70" width="110" />}</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link href="/">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link href="/teams_home">Teams</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link href="/team_create">Crea tu Equipo!</Nav.Link>
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
				<div />
			</div>
		);
	}
}

Navbar.propTypes = {
	test: PropTypes.string,
	test2: PropTypes.string
};
