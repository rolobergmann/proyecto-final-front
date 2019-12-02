import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Team = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron">
			<h1 className="display-4">Esta es la homepage del team {store.teams[props.match.params.theid].name}!</h1>
			<img src={store.teams[props.match.params.theid].logo} />

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
