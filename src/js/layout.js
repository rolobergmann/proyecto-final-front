import React from "react";
import { BrowserRouter, Route, Router, Switch, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { PrivateRoute } from "./component/PrivateRoute";
import { history } from "./component/auth/history";
import { authenticationService } from "./component/auth/authentication.service";
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { TeamsHome } from "./views/teams_home";
import { TeamCreate } from "./views/team_create";
import { Team } from "./views/team";
import { Players } from "./views/players";
import { LoginPage } from "./component/login";

import { Footer } from "./component/footer";
import { Admin } from "./component/admin";

const layoutStyle = {
	paddingTop: 100
};

//create your first component
class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
	}

	logout() {
		authenticationService.logout();
		history.push("/LoginPage");
	}

	render() {
		const { currentUser } = this.state;
		return (
			<div className="d-flex flex-column h-100" style={layoutStyle}>
				<Router history={history}>
					<div>
						<nav className="navbar navbar-expand navbar-dark bg-dark">
							<div className="navbar-nav">
								<Link to="/" className="nav-item nav-link">
									Home
								</Link>
								<Link to="/teams_home" className="nav-item nav-link">
									Teams
								</Link>
								<Link to="/team_create" className="nav-item nav-link">
									Creador de equipos
								</Link>
								<Link to="/player" className="nav-item nav-link">
									Profile
								</Link>
								<Link to="/admin" className="nav-item nav-link">
									Admin
								</Link>
								<a onClick={this.logout} className="nav-item nav-link">
									Logout
								</a>
							</div>
						</nav>

						<div className="container">
							<div>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route path="/demo" component={Demo} />
									<Route path="/teams_home" component={TeamsHome} />
									<Route path="/team_create" component={TeamCreate} />
									<Route path="/team/:theid" component={Team} />
									<Route path="/player" component={Players} />
									<PrivateRoute exact path="/admin" component={Admin} />
									<Route path="/LoginPage" component={LoginPage} />
									<Route path="*" render={() => <h1>Not found!</h1>} />
								</Switch>
							</div>
						</div>
					</div>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default injectContext(Layout);
