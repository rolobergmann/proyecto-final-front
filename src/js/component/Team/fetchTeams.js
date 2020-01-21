import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export const FetchTeams = () => {
	const { store } = useContext(Context);

	return (
		<div>
			<Row md={5} className="justify-content-md-center">
				{store.teams.map(team => (
					<Card key={team.ID} style={{ width: "18rem" }}>
						<Card.Img variant="center" src={`/${team.logo}`} />

						<Card.Body>
							<Link to={"/team/" + team.ID}>
								<Card.Title variant="center">{team.name}</Card.Title>
							</Link>
						</Card.Body>
					</Card>
				))}
			</Row>
		</div>
	);
};

export default FetchTeams;
