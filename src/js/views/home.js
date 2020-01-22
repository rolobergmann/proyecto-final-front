import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carrusel } from "../component/carrusel";
import { HomeInfo } from "../component/home_info";
import { Context } from "../store/appContext";

export const Home = () => (
	<div className=" container text-center mt-1">
		{/* <div>
			<Carrusel />
		</div> */}
		<HomeInfo />
	</div>
);
