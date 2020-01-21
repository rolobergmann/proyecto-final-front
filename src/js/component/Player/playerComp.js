import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Media from "react-bootstrap/Media";
import { authenticationService } from "../auth/authentication.service";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow"
};

export class ApiComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			playerinfo: {},
			currentUser: authenticationService.currentUserValue
		};
	}

	componentDidMount() {
		fetch("https://ovrstat.com/stats/pc/" + this.state.currentUser.user.blizzardID, requestOptions)
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				// console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				this.setState({
					isLoaded: true,
					playerinfo: {
						icon: data.icon,
						name: data.name,
						won: data.competitiveStats.careerStats.allHeroes.game.gamesWon,
						lost: data.competitiveStats.careerStats.allHeroes.game.gamesLost,
						time: data.competitiveStats.careerStats.allHeroes.game.timePlayed
					}
				});
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

	render() {
		const { error, isLoaded, data } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			);
		} else {
			return (
				<Media>
					<img
						width={128}
						height={128}
						className="align-self-start mr-3"
						src={this.state.playerinfo.icon}
						alt="Icono de Perfil"
					/>
					<Media.Body>
						<h5>{this.state.playerinfo.name}</h5>
						<ListGroup variant="flush">
							<ListGroup.Item>
								Partidas Ganadas Temporada Actual - {this.state.playerinfo.won}
							</ListGroup.Item>
							<ListGroup.Item>
								Partidas Perdidas Temporada Actual - {this.state.playerinfo.lost}
							</ListGroup.Item>
							<ListGroup.Item>
								Tiempo Jugado Temporada Actual - {this.state.playerinfo.time}
							</ListGroup.Item>
						</ListGroup>
					</Media.Body>
				</Media>
			);
		}
	}
}
