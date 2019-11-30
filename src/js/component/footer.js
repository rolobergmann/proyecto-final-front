import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => (
	<MDBFooter color="blue" className="font-small pt-4 mt-4">
		<MDBContainer fluid className="text-center text-md-left">
			<MDBRow>
				<MDBCol md="4">
					<ul className="list-unstyled">
						<li>
							<Link to="/">Tu Perfil</Link>
						</li>
						<li>
							<Link to="/">Equipos</Link>
						</li>
						<li>
							<Link to="/">Postulaciones</Link>
						</li>
					</ul>
				</MDBCol>

				<MDBCol md="4">
					<h5 className="text-uppercase">Visítanos en nuestras Redes Sociales</h5>
					<br />
					<Link to="/">
						<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
					</Link>
					<a className="tw-ic">
						<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
					</a>
					<a className="ins-ic">
						<i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
					</a>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
		<div className="footer-copyright text-center py-3">
			<MDBContainer fluid>
				&copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
			</MDBContainer>
		</div>
	</MDBFooter>
);
