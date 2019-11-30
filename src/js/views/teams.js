import React from "react";
import "../../styles/home.scss";
import { Carrusel } from "../component/carrusel";
import { TeamDetails } from "../component/Team/team";

export const Teams = () => (
	<div className=" container text-center mt-1">
		<div>
			<Carrusel />
		</div>
		<TeamDetails />
	</div>
);
