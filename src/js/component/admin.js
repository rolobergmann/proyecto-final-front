import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Card, Accordion, Form, Row, Col, Spinner } from "react-bootstrap";

export class Admin extends Component {
	render() {
		return (
			<div className="container">
				<div clasdName="row">
					<h1>Panel de Administracion</h1>
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
						<Card />
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="2">
									Carrusel Imagenes
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="2">
								<Card.Body>Hello! Im another body</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="3">
									Reset Password de Usuarios
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="3">
								<Card.Body>Hello! Im another body</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</div>
			</div>
		);
	}
}
