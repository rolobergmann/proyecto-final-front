import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Media from "react-bootstrap/Media";

export const Team = props => {
	const { store } = useContext(Context);
	const indice = props.match.params.theid - 1;

	const ownerTeam = store.user.map(item => {
		if (item.id == store.teams[indice].owner) {
			return item.username;
		}
	});

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
					<p>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
						commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
						nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					</p>
					<h5>Jugadores</h5>
					<p>Aqui</p>
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
