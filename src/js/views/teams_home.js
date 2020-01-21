import React, { useState, useEffect, useContext } from "react";
import { FetchTeams } from "../component/Team/fetchTeams";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TeamsHome = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<FetchTeams />
		</div>
	);
};
