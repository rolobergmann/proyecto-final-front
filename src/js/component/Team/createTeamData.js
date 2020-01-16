import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const CreateTeam = () => (
	<Form>
		<Form.Group controlId="exampleForm.ControlTextarea0">
			<Form.Label>Nombre de tu Equipo</Form.Label>
			<Form.Control as="textarea" rows="1" />
		</Form.Group>
		<Form.Group controlId="exampleForm.ControlSelect1">
			<Form.Label>Selecciona los juegos en los que participaran!</Form.Label>
			<Form.Control as="select">
				<option>Overwatch</option>
			</Form.Control>
		</Form.Group>
		<Form.Group controlId="exampleForm.ControlTextarea0">
			<Form.Label>Lema de tu equipo</Form.Label>
			<Form.Control as="textarea" rows="1" />
		</Form.Group>
		<Form.Group controlId="exampleForm.ControlTextarea1">
			<Form.Label>Biografia equipo</Form.Label>
			<Form.Control as="textarea" rows="3" />
		</Form.Group>
		<Button variant="primary" type="submit">
			Crear!
		</Button>
	</Form>
);
