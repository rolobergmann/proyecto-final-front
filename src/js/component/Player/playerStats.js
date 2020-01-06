import React from "react";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow"
};

export class ApiFetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			playerinfo: {}
		};
	}

	componentDidMount() {
		fetch("https://ow-api.com/v1/stats/pc/global/AirMann-1713/profile", requestOptions)
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				// console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				this.setState({
					playerinfo: {
						name: data.name
					}
				});
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
		// .then(response => response.text())
		// .then(result => console.log(result))
		// .catch(error => console.log("error", error));
	}
	render() {
		return <div>{this.state.playerinfo.name}</div>;
	}
}
