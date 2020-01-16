import React from "react";

import Spinner from "react-bootstrap/Spinner";

import NewSingleItem from "../Team/NewSingleItem";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow"
};

export default class FetchTeams extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount() {
		fetch("http://localhost:3000/teams", requestOptions)
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				this.setState({
					isLoaded: true,
					items: data.map(item => ({
						id: item.id,
						logo: item.logo,
						name: item.name,
						tag: item.tag,
						owner: item.owner
					}))
				});
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

	renderItems() {
		return this.state.items.map(function(item, key) {
			return (
				<li key={item.id}>
					<NewSingleItem item={item} />
				</li>
			);
		});
	}

	render() {
		const { error, isLoaded, data } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			);
		} else {
			return <ul>{this.renderItems()}</ul>;
		}
	}
}
