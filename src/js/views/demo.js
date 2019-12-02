import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Row>
				{store.teams.map((item, index) => {
					return (
						<Col key={index}>
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src={item.logo} />
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card content.
									</Card.Text>
									<Link to={"/single/" + index}>
										<Button variant="primary">
											<span>Link to: {item.name}</span>
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
