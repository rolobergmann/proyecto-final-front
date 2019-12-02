import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { TeamsHome } from "./views/teams_home";
import { TeamCreate } from "./views/team_create";
import { Team } from "./views/team";
import { Players } from "./views/players";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Admin } from "./component/admin";

const layoutStyle = {
	paddingTop: 75
};

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100" style={layoutStyle}>
			<BrowserRouter>
				<ScrollToTop>
					<Navbar test="Admin" />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/teams_home" component={TeamsHome} />
						<Route path="/team_create" component={TeamCreate} />
						<Route path="/team/:theid" component={Team} />
						<Route path="/player" component={Players} />
						<Route path="/admin" component={Admin} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
