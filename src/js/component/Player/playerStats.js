import React from "react";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("TRN-Api-Key", "0b14edca-732d-4a1b-a748-5a7729d7e88f");

var requestOptions = {
	method: "GET",
	headers: myHeaders,
	mode: "no-cors",
	redirect: "follow"
};

export class ApiFetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount() {
		fetch("https://public-api.tracker.gg/v2/overwatch/standard/profile/battlenet/AirMann%231713", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}
	render() {
		return <ul>exito</ul>;
	}
}
