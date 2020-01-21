import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Team = props => {
	const { store, actions } = useContext(Context);
	let indice = props.match.params.theid - 1;

	return (
		<div className="jumbotron">
			<div>{store.teams[indice].tag}</div>
			<img src={`/${store.teams[indice].logo}`} />
			<h1 className="display-4">{store.teams[indice].name} Home page!</h1>
			<h2>{store.teams[indice].bio}</h2>

			<hr className="my-4" />
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Team.propTypes = {
	match: PropTypes.object
};
