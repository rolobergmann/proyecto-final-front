import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
	<div className="mt-4 pt-3 pb-2 footer">
		<div className="container">
			<div className="row">
				<div className="col-lg-5 col-xs-12 about-company">
					<h2>Redes sociales</h2>
					{/* <p className="pr-5 text-white-50">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique
						convallis{" "}
					</p> */}
					<p>
						<a href="#">
							<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
						</a>
						<a href="#">
							<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
						</a>
						<a href="#">
							<i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
						</a>
					</p>
				</div>
				<div className="col-lg-3 col-xs-12 links">
					<h4 className="mt-lg-0 mt-sm-3">Links</h4>
					<ul className="m-0 p-0">
						<li>
							<a href="https://playoverwatch.com/es-mx/">PlayOverwatch</a>
						</li>
						<li>
							<a href="https://overwatchleague.com/es-es/">Overwatch League</a>
						</li>
						<li>
							<a href="https://overwatch2.playoverwatch.com/es-es/trailer">Overwatch2</a>
						</li>
					</ul>
				</div>
				<div className="col-lg-4 col-xs-12 location">
					<h4 className="mt-lg-0 mt-sm-4">Contactenos</h4>
					<p>4egamerschile@gmail.com</p>
					{/* <p className="mb-0">
						<i className="fa fa-phone mr-3" />
						(541) 754-3010
					</p>
					<p>
						<i className="fa fa-envelope-o mr-3" />
						info@hsdf.com
					</p> */}
				</div>
			</div>
			<div className="row mt-5">
				<div className="col copyright">
					<p className="">
						<small className="text-white-50">© 2020. All Rights Reserved.</small>
					</p>
				</div>
			</div>
		</div>
	</div>
);
