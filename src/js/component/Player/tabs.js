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
import { ApiFetch } from "../Player/playerStats";

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
									Stats
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									to="#"
									active={this.state.items["default"] === "3"}
									onClick={this.togglePills("default", "3")}>
									Bio
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
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
							</Nav.Item>
						</Nav>
						<MDBTabContent activeItem={this.state.items["default"]}>
							<MDBTabPane tabId="1">
								<div>
									<ApiFetch />
								</div>
							</MDBTabPane>
							<MDBTabPane tabId="2">
								<p>
									Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit
									ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex
									eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna
									Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit
									adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.
								</p>
							</MDBTabPane>
							<MDBTabPane tabId="3">
								<p>
									Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip
									dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt
									reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex
									labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip
									nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse
									irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore
									ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore
									aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa
									veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo
									voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit
									voluptate voluptate consequat non.
								</p>
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
