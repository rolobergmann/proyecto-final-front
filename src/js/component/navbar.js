import React, { Component } from "react";
import { Nav, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Login } from "./login";

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
					className="justify-content-between navbar navbar-dark bg-dark navbar-expand-lg fixed-top"
					defaultActiveKey="/home"
					as="ul"
					variant="primary">
					<Nav.Item className="navbar-brand">
						<img src="#" />
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link href="/home">Active</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link eventKey="link-1">Link1</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link eventKey="link-2">Link2</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link eventKey="link-3">Link3</Nav.Link>
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
