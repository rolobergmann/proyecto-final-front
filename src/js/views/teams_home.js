import React from "react";
import "../../styles/home.scss";
import { Carrusel } from "../component/carrusel";
import { TeamsHomeLayout } from "../component/Team/teams_home_layout";

export const TeamsHome = () => (
	<div className=" container text-center mt-1">
		<TeamsHomeLayout />
	</div>
);
