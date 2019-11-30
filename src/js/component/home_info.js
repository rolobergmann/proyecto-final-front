import React from "react";
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

export const HomeInfo = () => (
	<MDBContainer>
		<MDBRow>
			<MDBCol>
				<MDBAnimation type="slideInUp">
					<MDBJumbotron fluid style={{ padding: 0 }}>
						<MDBCol
							className="text-white text-center py-5 px-4 my-5"
							style={{
								backgroundImage: `url(https://images.clarin.com/2019/10/29/mundial-de-league-of-legends___5xo-1Dg7_1200x0__1.jpg)`
							}}>
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
				</MDBAnimation>
			</MDBCol>
		</MDBRow>
	</MDBContainer>
);
