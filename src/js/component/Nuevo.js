import React, { Component } from "react";

import { Nav, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

export class Nuevo extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.msj}</h1>
			</div>
		);
	}
}
