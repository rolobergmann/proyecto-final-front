import React, { Component } from "react";
import "../../styles/home.scss";
import { PlayerDetails } from "../component/Player/player";
import { PlayerData } from "../component/Player/playerData";

export const Players = () => (
	<div className=" container text-center mt-1">
		<div>
			<PlayerData />
			<PlayerDetails />
		</div>
	</div>
);
