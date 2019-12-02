import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Avatar from "../../../img/avatarGamer.png";

export class PlayerData extends React.Component {
	render() {
		return (
			<div className="card mb-6">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={Avatar} className="card-img" alt="..." />
						<div className="container">
							<div className="input-group-prepend">
								<span className="input-group-text">Avatar</span>

								<div className="custom-file">
									<input type="file" className="custom-file-input" id="inputGroupFile01" />
									<label className="custom-file-label" forHtml="inputGroupFile01">
										Select your file
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="card-header">Nick here</div>
						<div className="card-body">
							<p className="card-text">
								<div className="input-group col-md-8">
									<div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-default">
											Nombre
										</span>
									</div>
									<input
										type="text"
										className="form-control"
										aria-label="Sizing example input"
										aria-describedby="inputGroup-sizing-default"
									/>
								</div>
							</p>

							<p className="card-text">
								<div className="input-group col-md-8">
									<div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-default">
											Edad
										</span>
									</div>
									<input
										type="text"
										className="form-control"
										aria-label="Sizing example input"
										aria-describedby="inputGroup-sizing-default"
									/>
								</div>
							</p>

							<p className="card-text">
								<div className="input-group col-md-12">
									<div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-default">
											Sexo
										</span>
									</div>
									<div className="input-group col-md-6">
										<select className="custom-select" id="inputGroupSelect01">
											<option selected>Seleccione...</option>
											<option value="1">Masculino</option>
											<option value="2">Femenino</option>
										</select>
									</div>
								</div>
							</p>

							<p className="card-text">
								<div className="input-group col-md-8">
									<div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-default">
											Ciudad
										</span>
									</div>
									<input
										type="text"
										className="form-control"
										aria-label="Sizing example input"
										aria-describedby="inputGroup-sizing-default"
									/>
								</div>
							</p>
							<p className="card-text">
								<div className="input-group col-md-8">
									<div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-default">
											Pais
										</span>
									</div>
									<input
										type="text"
										className="form-control"
										aria-label="Sizing example input"
										aria-describedby="inputGroup-sizing-default"
									/>
								</div>
							</p>

							<p className="card-text">
								<div className="input-group col-md-12">
									<div className="input-group-prepend">
										<span className="input-group-text" id="inputGroup-sizing-default">
											Juegos
										</span>
									</div>
									<input
										type="text"
										className="form-control"
										aria-label="Sizing example input"
										aria-describedby="inputGroup-sizing-default"
									/>
									<div className="input-group col-md-6">
										<select className="custom-select" id="inputGroupSelect01">
											<option selected>Choose...</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
									</div>
								</div>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
