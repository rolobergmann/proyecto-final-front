import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export const FetchTeams = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Row className="justify-content-md-center">
				<h1>Teams</h1>
			</Row>
			<Row md={5} className="justify-content-md-center">
				{store.teams.map(team => (
					<Card
						className="justify-content-md-center"
						variant="center"
						key={team.ID}
						style={{ width: "18rem" }}>
						<Card.Img width={250} height={250} src={`/${team.logo}`} />
						<Card.Body>
							<Link to={"/team/" + team.ID}>
								<Card.Title className="center">{team.name}</Card.Title>
							</Link>
						</Card.Body>
					</Card>
				))}
			</Row>
		</div>
	);
};

export default FetchTeams;
