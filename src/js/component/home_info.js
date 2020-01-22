import React from "react";
import ATVParallax from "react-atv-parallax";
import {
	MDBJumbotron,
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCardTitle,
	MDBIcon,
	MDBMask,
	MDBAnimation
} from "mdbreact";
import OwlBack from "../../img/owl.jpg";
import Egamers from "../../img/logonar.png";

const layoutStyle = {
	backgroundImage: `url(${OwlBack})`,
	backgroundPosition: "center",
	backgroundSize: "cover"
};

const rootDivStyle = {
	position: "relative",
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	paddingTop: 15

	// backgroundColor: "rgba(238, 239, 244, 1)"
};

export const HomeInfo = props => (
	<MDBContainer>
		<MDBRow>
			<MDBCol style={rootDivStyle}>
				<ATVParallax style={{ width: 992, height: 589 }}>
					<img src={OwlBack} />
					<div>
						<div
							style={{
								position: "relative",
								top: "77%",
								height: "20%",
								width: "100%",
								display: "table",
								left: "38%"
							}}>
							<span
								style={{
									fontSize: "3rem",
									// display: "table-cell",
									textAlign: "center",
									verticalAlign: "middle"
								}}>
								<img src={Egamers} />
							</span>
						</div>
					</div>
					{/* <div>
						<div
							style={{
								position: "absolute",
								// top: "77%",
								height: "20%",
								width: "100%",
								display: "table"
							}}>
							<span
								style={{
									fontSize: "3rem",
									display: "table-cell",
									textAlign: "center",
									verticalAlign: "middle",
									color: "white"
								}}>
								We are eSports!
							</span>
						</div>
					</div> */}
				</ATVParallax>

				{/* <MDBAnimation type="slideInUp">
					<MDBJumbotron fluid style={{ padding: 0 }}>
						<MDBCol className="text-white text-center py-5 px-4 my-5 bg-image-full" style={layoutStyle}>
							<MDBCol className="py-5">
								<MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
									Create your beautiful website with MDBootstrap
								</MDBCardTitle>
								<p className="mx-5 mb-5">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
									laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi
									architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
								</p>
								<hr className="my-2" />
								<p>
									It uses utility classes for typgraphy and spacing to space content out within the
									larger container.
								</p>
								<p className="lead">
									<MDBBtn color="primary">Learn More</MDBBtn>
								</p>
							</MDBCol>
						</MDBCol>
					</MDBJumbotron>
				</MDBAnimation> */}
			</MDBCol>
		</MDBRow>
	</MDBContainer>
);
