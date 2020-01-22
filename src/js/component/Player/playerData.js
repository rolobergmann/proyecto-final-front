import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Avatar from "../../../img/avatarGamer.png";
import { authenticationService } from "../auth/authentication.service";
import PlayerEdit from "./playerEdit";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export var blizzardID;
export var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
export class PlayerData extends React.Component {
	state = {};

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			firstname: "",
			lastname: "",
			username: "",
			blizzardID: "",
			image: Avatar,
			bio: "",
			password: "",
			editMode: false
		};
		this.state = {
			currentUser: authenticationService.currentUserValue,
			users: null
		};
	}
	handleShowEdit = () => {
		this.setState({
			editMode: true
		});
	};
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const user = this.state.currentUser.user;
		console.log(this.state.currentUser);
		if (this.state.editMode) {
			return <PlayerEdit />;
		} else {
			return (
				<Container>
					<div className="card mb-6">
						<div className="card-header">{user.username}</div>
						<Row className="row no-gutters">
							<Col className="col-md-4">
								<img src={user.image} className="card-img" alt="..." />
							</Col>
							<Col className="col-md-8">
								<div className="card-body">
									<ListGroup>
										<ListGroup.Item>
											{user.first_name} {user.last_name}
										</ListGroup.Item>
										<ListGroup.Item>{user.email}</ListGroup.Item>
										<ListGroup.Item>{user.blizzardID}</ListGroup.Item>
										<ListGroup.Item>{user.bio}</ListGroup.Item>
									</ListGroup>
									<div className="input-group col-md-12">
										<button onClick={this.handleShowEdit}>Editar</button>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			);
		}
	}
}
