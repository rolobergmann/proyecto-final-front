const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			teams: [],
			games: [
				{
					ID: "",
					name: "",
					logo: ""
				}
			],
			jugadores: [],
			registro: [],
			postulacion: []
		},

		actions: {
			async getTeamsInfo() {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("http://localhost:3000/teams", requestOptions)
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						setStore({ teams: data });
						data.map(item => ({
							ID: item.ID,
							bio: item.bio,
							game_ID: item.game_ID,
							logo: item.logo,
							name: item.name,
							owner: item.owner,
							tag: item.tag
						}));
					})
					.catch(error => {
						console.log(error);
					});
			},

			getUsers() {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("http://localhost:3000/user", requestOptions)
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						setStore({ user: data });
						data.map(item => ({
							id: item.id,
							email: item.email,
							username: item.username,
							first_name: item.first_name,
							last_name: item.last_name,
							role: item.role,
							bio: item.bio,
							image: item.image,
							blizzardID: item.blizzardID,
							team_user: item.team_user
						}));
					})
					.catch(error => {
						console.log(error);
					});

				// 		if (i === index) elm.background = color;
				// 		return elm;
			},

			getTeamMembers(team) {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};

				fetch("http://localhost:3000/team/" + team + "/list/", requestOptions)
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						// console.log(data.team_member);
						// console.log(data.team_member.length);
						const store = getStore();
						console.log(data.team_member);

						setStore({ jugadores: data.team_member });
						/*data.team_member.map(item => ({
							bio: item.bio,
							first_name: item.first_name,
							last_name: item.last_name,
							username: item.username,
							blizzardID: item.blizzardID,
							role: item.role,
							image: item.image
						})*/
						console.log(store.jugadores);
					});

				//console.log(store.jugadores.team_member[0].username);
				//console.log(store.jugadores.team_member);
			}
			// .catch(error => {
			// 	console.log(error);
			// });
		}

		// 	const store = getStore();
		// 	store.users.map((user => {
		// 		console.log(user.ID);
		// 		// if (user.ID == ownerID) {
		// 		// 	console.log(user.username);
		// 		// 	return user.username;
		// 	});
		// }
		// Use getActions to call a function within a fuction
		// exampleFunction: () => {
		// 	getActions().changeColor(0, "green");
		// },
		// loadSomeData: () => {
		// 	/**
		// 		fetch().then().then(data => setStore({ "foo": data.bar }))
		// 	*/
		// },
		// changeColor: (index, color) => {
		// 	//get the store
		// 	const store = getStore();
		// 	//we have to loop the entire demo array to look for the respective index
		// 	//and change its color
		// 	const demo = store.demo.map((elm, i) => {
		// 		if (i === index) elm.background = color;
		// 		return elm;
		// 	});
		// 	//reset the global store
		// 	setStore({ demo: demo });
	};
};

export default getState;
