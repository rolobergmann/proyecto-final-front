import React, { Component } from "react";
import { Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

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
						<img src="./src/img/logo_lion.jpg" alt="lala" />
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
					<Nav.Item as="li">
						<Nav.Link eventKey="link-3">{this.props.test}</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		);
	}
}

Navbar.propTypes = {
	test: PropTypes.string
};
