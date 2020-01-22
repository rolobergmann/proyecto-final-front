import React, { useState, useEffect, useContext, getActions } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Media from "react-bootstrap/Media";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

export const Team = props => {
	const { store, actions } = useContext(Context);
	const loadValue = 1;
	const indice = props.match.params.theid - 1;
	const ownerTeam = store.user.map(item => {
		if (item.id == store.teams[indice].owner) {
			return item.username;
		}
	});

	useEffect(() => {
		actions.getTeamMembers(props.match.params.theid);
	}, []);

	return (
		<div>
			<Media>
				<img width={200} height={200} className="align-self-center mr-3" src={`/${store.teams[indice].logo}`} />
				<Media.Body>
					<h1>
						{store.teams[indice].tag} {store.teams[indice].name} Page!
					</h1>
					<h2>Team Leader: {ownerTeam}</h2>
					<h5>Biografia</h5>
					<p>{store.teams[indice].bio}</p>
					<h5>Jugadores</h5>
					{/* {store.jugadores.team_member} */}
					<Row md={5} className="justify-content-md-center">
						{store.jugadores.map(jugador => (
							<Card
								className="justify-content-md-center"
								variant="center"
								key={jugador.ID}
								style={{ width: "18rem" }}>
								{/* <Card.Img width={250} height={250} src={`/${jugador.image}`} /> */}

								<Card.Body>{jugador.username}</Card.Body>
							</Card>
						))}
					</Row>
				</Media.Body>
			</Media>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Home
				</span>
			</Link>
		</div>
		// <div className="jumbotron">
		// 	<div>{store.teams[indice].tag}</div>
		// 	<img src={`/${store.teams[indice].logo}`} />
		// 	<h1 className="display-4"> Home page!</h1>
		// 	<h2>{store.teams[indice].bio}</h2>
		// 	<h1>{store.teams[indice].owner}</h1>
		// 	<h1>{ownerTeam}</h1>

		// 	<hr className="my-4" />

		// 	<Link to="/">
		// 		<span className="btn btn-primary btn-lg" href="#" role="button">
		// 			Back home
		// 		</span>
		// 	</Link>
		// </div>
	);
};

Team.propTypes = {
	match: PropTypes.object
};
