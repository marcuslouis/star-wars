const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: {},
			img: "https://starwars-visualguide.com/assets/img/characters/",
			data: {},
			list:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow',
				  };
				  
				  fetch("https://www.swapi.tech/api/people", requestOptions)
					.then(response => response.json())
					.then(result => setStore({demo : result}))
					.catch(error => console.log('error', error));
			},
			data: (uid) => {
				var data = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch(`https://www.swapi.tech/api/people/${uid}`, data)
					.then(response => response.json())
					.then(result => setStore({data : result}))
					.catch(error => console.log('error', error));
			},
			favorite: (ele) => {
				const store = getStore() 
					setStore({list : [...store.list, ele]})
			},
			delete: (X) => {
				const store = getStore()
					let del = store.list.filter((element, i) => X !== i)
					setStore({list:del})
			
			},
		}
	};
};

export default getState;
