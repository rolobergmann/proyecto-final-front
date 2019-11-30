import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

export class Admin extends Component {
	render() {
		return (
			<div className="container">
				<div clasdName="row">
					<h1>Panel de Administracion</h1>
					<ul>
						<li>Deshabilitar Jugador</li>
						<li>Borrar Equipo</li>
						<li>Carrusel Imagenes</li>
						<li>Reset Password</li>
					</ul>
				</div>
			</div>
		);
	}
}
