import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { checkPropTypes, PropTypes } from "prop-types";
import Consumer from "../../store/newContext";

// const NewSingleItem = ({ item }) => (
const NewSingleItem = () => (
	<div className="mt-4">
		<div className="row">
			<Consumer>
				{value => (
					<div>
						{value.user.name}
						<Card style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title>{value.user.nick}</Card.Title>
							</Card.Body>
						</Card>
					</div>
				)}
			</Consumer>
		</div>
	</div>
);

// NewSingleItem.propTypes = {
// 	item: PropTypes.object
// };
export default NewSingleItem;
