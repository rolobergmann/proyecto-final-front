import React from "react";
import "../../styles/home.scss";
import { Carrusel } from "../component/carrusel";
import { PlayerDetails } from "../component/Player/player";

export const Players = () => (
	<div className=" container text-center mt-1">
		<div>
			<Carrusel />
		</div>
		<PlayerDetails />
	</div>
);
