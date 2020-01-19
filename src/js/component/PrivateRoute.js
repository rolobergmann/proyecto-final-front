import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { authenticationService } from "./auth/authentication.service";

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			const currentUser = authenticationService.currentUserValue;
			if (!currentUser) {
				// not logged in so redirect to login page with the return url
				return <Redirect to={{ pathname: "/LoginPage", state: { from: props.location } }} />;
			}

			// authorised so return component
			return <Component {...props} />;
		}}
	/>
);

PrivateRoute.propTypes = {
	location: PropTypes.any,
	component: PropTypes.any
};
