import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

export const Sidebar = () => (
	<div className="p-0 mt-0">
		<MDBContainer>
			<MDBListGroup style={{ width: "100%" }}>
				<MDBListGroupItem color="info">
					<p>Pepito los Palotes es el nuevo Main Tank en Overwatch para Gladiadores!</p>
				</MDBListGroupItem>
				<MDBListGroupItem color="info">
					<p>Pepito los Palotes es el nuevo Main Tank en Overwatch para Gladiadores!</p>
				</MDBListGroupItem>
				<MDBListGroupItem color="info">
					<p>Pepito los Palotes es el nuevo Main Tank en Overwatch para Gladiadores!</p>
				</MDBListGroupItem>
				<MDBListGroupItem color="info">Porta ac consectetur ac</MDBListGroupItem>
				<MDBListGroupItem color="info">Vestibulum at eros</MDBListGroupItem>
			</MDBListGroup>
		</MDBContainer>
	</div>
);
