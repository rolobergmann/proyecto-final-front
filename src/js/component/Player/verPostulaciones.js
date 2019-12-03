import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import styles from "../../../styles/card.scss";

export const Postulacion = props => (
	<Card style={{ width: "18rem" }}>
		<Card.Img variant="top" src={props.img} className="equipo" />
		<Card.Body>
			<Card.Title>
				<Card.Img src={props.logo} className="estiloLogo" /> {props.game}
			</Card.Title>
			<Card.Text>
				<p>Estado: En Progreso</p>
				<p>Fecha Postulacion: 12/09/2019</p>
				<p>Fecha termino: 12/12/2019</p>
			</Card.Text>
		</Card.Body>
	</Card>
);

Postulacion.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	game: PropTypes.string,
	logo: PropTypes.string
};
