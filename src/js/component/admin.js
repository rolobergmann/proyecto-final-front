import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Card, Accordion, Form, Row, Col, Spinner } from "react-bootstrap";
import { authenticationService } from "./auth/authentication.service";

export class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: authenticationService.currentUserValue
		};
	}
	render() {
		const user = this.state.currentUser.user;
		console.log(this.state.currentUser);
		if (user.role !== 1) {
			return <h1>No tienes permisos de adminstrador</h1>;
		}

		return (
			<div className="container">
				<div className="row">
					<h1>Bienvenidos al Panel de Administracion</h1>
					<br />
					<Accordion>
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="0">
									Deshabilitar Jugador!
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0">
								<Card.Body>
									<Form>
										<Form.Group controlId="formBasicEmail">
											<Row>
												<Col>
													<Form.Control
														type="email"
														placeholder="Buscar Jugador por su nick"
													/>
												</Col>
												<Col>
													<Button variant="primary" type="submit">
														Buscar
													</Button>
												</Col>
											</Row>
										</Form.Group>
										<Row>
											<Col />

											<Col>
												<Form.Check
													type="switch"
													id="custom-switch"
													label="Activar/Deshabilitar"
												/>
											</Col>
											<Col>
												<Button variant="primary" type="submit">
													Confirmar
												</Button>
											</Col>
											<Col />
										</Row>
									</Form>
								</Card.Body>
							</Accordion.Collapse>
						</Card>

						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="1">
									Deshabilitar Equipo!
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="1">
								<Card.Body>
									<Form>
										<Form.Group controlId="formBasicEmail">
											<Row>
												<Col>
													<Form.Control type="email" placeholder="Buscar Equipo" />
												</Col>
												<Col>
													<Button variant="primary" type="submit">
														Buscar
													</Button>
												</Col>
											</Row>
										</Form.Group>
										<Row>
											<Col />

											<Col>
												<Form.Check
													type="switch"
													id="custom-switch"
													label="Activar/Deshabilitar"
												/>
											</Col>
											<Col>
												<Button variant="primary" type="submit">
													Confirmar
												</Button>
											</Col>
											<Col />
										</Row>
									</Form>
								</Card.Body>
							</Accordion.Collapse>
						</Card>

						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="2">
									Editar Carrusel Imagenes
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="2">
								<Card.Body>
									<div className="d-flex justify-content-center">
										Aqui se pueden administrar las imagenes del carrusel en el inicio de la página.
										<br />
										El formato es 400x400px.
										<br />
										<br />
									</div>
									<Form>
										<Form.Group as={Row} controlId="formHorizontalEmail">
											<Form.Label column sm={2}>
												1era Imagen
											</Form.Label>
											<Col sm={10}>
												<div className="input-group sm-3">
													<div className="custom-file">
														<input
															type="file"
															className="custom-file-input"
															id="inputGroupFile01"
															aria-describedby="inputGroupFileAddon01"
														/>
														<label className="custom-file-label" htmlFor="inputGroupFile01">
															Choose file
														</label>
													</div>
												</div>
											</Col>
										</Form.Group>
										<Form.Group as={Row} controlId="formHorizontalEmail">
											<Form.Label column sm={2}>
												2da Imagen
											</Form.Label>
											<Col sm={10}>
												<div className="input-group sm-3">
													<div className="custom-file">
														<input
															type="file"
															className="custom-file-input"
															id="inputGroupFile01"
															aria-describedby="inputGroupFileAddon01"
														/>
														<label className="custom-file-label" htmlFor="inputGroupFile01">
															Choose file
														</label>
													</div>
												</div>
											</Col>
										</Form.Group>
										<Form.Group as={Row} controlId="formHorizontalEmail">
											<Form.Label column sm={2}>
												3ra Imagen
											</Form.Label>
											<Col sm={10}>
												<div className="input-group sm-3">
													<div className="custom-file">
														<input
															type="file"
															className="custom-file-input"
															id="inputGroupFile01"
															aria-describedby="inputGroupFileAddon01"
														/>
														<label className="custom-file-label" htmlFor="inputGroupFile01">
															Choose file
														</label>
													</div>
												</div>
											</Col>
										</Form.Group>
										<Form.Group as={Row} controlId="formHorizontalEmail">
											<Form.Label column sm={2}>
												4ta Imagen
											</Form.Label>
											<Col sm={10}>
												<div className="input-group sm-3">
													<div className="custom-file">
														<input
															type="file"
															className="custom-file-input"
															id="inputGroupFile01"
															aria-describedby="inputGroupFileAddon01"
														/>
														<label className="custom-file-label" htmlFor="inputGroupFile01">
															Choose file
														</label>
													</div>
												</div>
											</Col>
										</Form.Group>
										<div className="d-flex justify-content-center">
											<Button variant="primary" type="submit">
												Guardar Cambios
											</Button>
										</div>
									</Form>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="3">
									Reset Password de Usuarios
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="3">
								<Card.Body>
									<Form>
										<Form.Group controlId="formBasicEmail">
											<Row>
												<Col>
													<Form.Control
														type="email"
														placeholder="Buscar Jugador por su nick"
													/>
												</Col>
												<Col>
													<Button variant="primary" type="submit">
														Buscar
													</Button>
												</Col>
											</Row>
										</Form.Group>
										<Row>
											<Col />
											<Col>
												<Button variant="primary" type="submit">
													Reset Password
												</Button>
											</Col>
											<Col />
										</Row>
									</Form>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</div>
			</div>
		);
	}
}
