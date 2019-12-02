import React, { Component } from "react";
import "../../styles/home.scss";
import { Tabs } from "../component/Player/tabs";
import { PlayerData } from "../component/Player/playerData";

export const Players = () => (
	<div className=" container text-center mt-1">
		<div>
			<PlayerData />
			<Tabs />
		</div>
	</div>
);
