import React, { useState, useEffect, useContext } from "react";
import { FetchTeams } from "../component/Team/fetchTeams";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TeamsHome = () => {
	const { store, actions } = useContext(Context);

	// return (
	// 	<div className="container">
	// 		<Row>
	// 			{store.teams.map((item, index) => {
	// 				return (
	// 					<Col key={index}>
	// 						<Card style={{ width: "18rem" }}>
	// 							<Card.Img variant="top" src={item.logo} />
	// 							<Card.Body>
	// 								<Card.Title>{item.name}</Card.Title>
	// 								<Card.Text>{item.lema}</Card.Text>
	// 								<Link to={"/team/" + index}>
	// 									<Button variant="outline-primary">
	// 										<span>{item.name}</span>
	// 									</Button>
	// 								</Link>
	// 							</Card.Body>
	// 						</Card>
	// 					</Col>
	// 				);
	// 			})}
	// 		</Row>
	// 		<br />
	// 		<Link to="/">
	// 			<button className="btn btn-primary">Back home</button>
	// 		</Link>
	// 	</div>
	// );

	return (
		<div>
			<FetchTeams />
		</div>
	);
};
