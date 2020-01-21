import React from "react";
import { Route, Router, Switch, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { PrivateRoute } from "./component/PrivateRoute";
import { history } from "./component/auth/history";
import { authenticationService } from "./component/auth/authentication.service";
import injectContext from "./store/appContext";
import { Nav } from "react-bootstrap";
import Logo from "../img/logonar.png";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { TeamsHome } from "./views/teams_home";
import { TeamCreate } from "./views/team_create";
import { Team } from "./views/team";
import { Players } from "./views/players";
import { LoginPage } from "./component/login";
import { Register } from "./component/Registro/registro";

import { Footer } from "./component/footer";
import { Admin } from "./component/admin";
import "../styles/navbar.scss";

const layoutStyle = {
	paddingTop: 100
};

//create your first component
class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
			isOpen: false,
			loggedUser: authenticationService.currentUserValue
		};
	}
	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	componentDidMount() {
		authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
	}

	logout() {
		authenticationService.logout();
		history.push("/LoginPage");
	}

	render() {
		const { currentUser } = this.state;
		console.log(currentUser);
		return (
			<div className="d-flex flex-column h-100" style={layoutStyle}>
				<Router history={history}>
					<div className="nav-links">
						<Nav className="justify-content-between navbar fixed-top" defaultActiveKey="/home" as="ul">
							<Nav.Item className="navbar-brand">{<img src={Logo} height="70" width="110" />}</Nav.Item>
							<Nav.Item as="li">
								<Link to="/" className="nav-item nav-link">
									Home
								</Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Link to="/teams_home" className="nav-item nav-link">
									Teams
								</Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Link to="/team_create" className="nav-item nav-link">
									Creador de equipos
								</Link>
							</Nav.Item>
							<Nav.Item as="li">
								<Link to="/player" className="nav-item nav-link">
									Tu perfil
								</Link>
							</Nav.Item>
							{currentUser && (
								<Nav.Item as="li">
									<Link to="/admin" className="nav-item nav-link">
										Admin
									</Link>
								</Nav.Item>
							)}
							{currentUser == null && (
								<Nav.Item as="li">
									<Link to="/LoginPage" className="nav-item nav-link">
										Login
									</Link>
								</Nav.Item>
							)}
							{currentUser && (
								<Nav.Item as="li">
									<a onClick={this.logout} className="nav-item nav-link">
										Logout
									</a>
								</Nav.Item>
							)}
						</Nav>

						<div className="container">
							<div>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route path="/demo" component={Demo} />
									<Route path="/teams_home" component={TeamsHome} />
									<Route path="/register" component={Register} />
									<PrivateRoute exact path="/team_create" component={TeamCreate} />
									<Route path="/team/:theid" component={Team} />
									<PrivateRoute exact path="/player" component={Players} />
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
