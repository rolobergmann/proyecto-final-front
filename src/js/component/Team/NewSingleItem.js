import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { checkPropTypes, PropTypes } from "prop-types";

const NewSingleItem = ({ item }) => (
	<Card style={{ width: "18rem" }}>
		<Card.Img variant="top" src={item.logo} />
		<Card.Body>
			<Card.Title>{item.name}</Card.Title>

			<ul type="square">
				<li>Nombre del equipo - {item.name}</li>
				<li>TAG - {item.tag}</li>
				<li>Owner - {item.owner}</li>
			</ul>
		</Card.Body>
	</Card>
);

NewSingleItem.propTypes = {
	item: PropTypes.object
};
export default NewSingleItem;
