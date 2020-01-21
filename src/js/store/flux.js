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
			registro: [],
			postulacion: [],
			visible: "Si"
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
						console.log(resp.ok); // will be true if the response is successfull
						console.log(resp.status); // the status code = 200 or code = 400 etc.
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
						//error handling
						console.log(error);
					});
			}
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
		}
	};
};

export default getState;
