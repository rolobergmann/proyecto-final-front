import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { Postulacion } from "../Player/verPostulaciones";
import Wolves from "../../../img/WolvesGaming.png";
import PEX from "../../../img/PEXTeam.jpg";
import MSI from "../../../img/TeamMSI.png";
import FURIOUS from "../../../img/Furious_Gaminglogo.png";
import NAVI from "../../../img/Navi.png";
import C9 from "../../../img/C9.png";
import OWLogo from "../../../img/OWLogo.png";
import CSGOLogo from "../../../img/CSGOLogo.jpg";
import LOLLogo from "../../../img/LOLLogo.jpg";
import { CrearPostulacion } from "../Team/crearPostulacion";
import { ApiResumen } from "../Player/playerStats";
import { ApiComp } from "./playerComp";
import { ApiQuick } from "./playerQuick";

export class Tabs extends Component {
	state = {
		items: {
			default: "1"
		}
	};

	togglePills = (type, tab) => e => {
		e.preventDefault();
		if (this.state.items[type] !== tab) {
			let items = { ...this.state.items };
			items[type] = tab;
			this.setState({
				items
			});
		}
	};

	render() {
		return (
			<MDBContainer className="mt-4">
				<MDBRow>
					<MDBCol md="12">
						<Nav justify variant="tabs">
							<Nav.Item>
								<Nav.Link
									to="#"
									active={this.state.items["default"] === "1"}
									onClick={this.togglePills("default", "1")}>
									Resumen
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									to="#"
									active={this.state.items["default"] === "2"}
									onClick={this.togglePills("default", "2")}>
									Competitivo
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									to="#"
									active={this.state.items["default"] === "3"}
									onClick={this.togglePills("default", "3")}>
									Partidas Rapidas
								</Nav.Link>
							</Nav.Item>
							{/* <Nav.Item>
								<Nav.Link
									to="#"
									active={this.state.items["default"] === "4"}
									onClick={this.togglePills("default", "4")}>
									Mis Postulaciones
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									to="#"
									active={this.state.items["default"] === "5"}
									onClick={this.togglePills("default", "5")}>
									Crear Postulacion
								</Nav.Link>
							</Nav.Item> */}
						</Nav>
						<MDBTabContent activeItem={this.state.items["default"]}>
							<MDBTabPane tabId="1">
								<div>
									<ApiResumen />
								</div>
							</MDBTabPane>
							<MDBTabPane tabId="2">
								<div>
									<ApiComp />
								</div>
							</MDBTabPane>
							<MDBTabPane tabId="3">
								<div>
									<ApiQuick />
								</div>
							</MDBTabPane>
							<MDBTabPane tabId="4">
								<br />
								<Row md={5} className="justify-content-md-center">
									{/* Aqui luego agregamos un map para traer la info y renderizar las cartas */}
									<Postulacion img={Wolves} game="CSGO" logo={CSGOLogo} />
									<Postulacion img={PEX} game="League of Legends" logo={LOLLogo} />
									<Postulacion img={MSI} game="Overwatch" logo={OWLogo} />
									<Postulacion img={FURIOUS} game="League of Legends" logo={LOLLogo} />
									<Postulacion img={C9} game="CSGO" logo={CSGOLogo} />
									<Postulacion img={NAVI} game="CSGO" logo={CSGOLogo} />
								</Row>
							</MDBTabPane>

							<MDBTabPane tabId="5">
								<CrearPostulacion />
							</MDBTabPane>
						</MDBTabContent>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}
