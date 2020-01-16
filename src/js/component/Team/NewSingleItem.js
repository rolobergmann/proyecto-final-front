import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";
import { checkPropTypes, PropTypes } from "prop-types";

const NewSingleItem = ({ item }) => (
	<Media>
		<Media.Body>
			<h5>{item.name}</h5>
			<ListGroup variant="flush">
				<ListGroup.Item>Nombre del equipo - {item.name}</ListGroup.Item>
				<ListGroup.Item>TAG - {item.tag}</ListGroup.Item>
				<ListGroup.Item>Owner - {item.owner}</ListGroup.Item>
			</ListGroup>
		</Media.Body>
	</Media>
);

NewSingleItem.propTypes = {
	item: PropTypes.string
};
export default NewSingleItem;
