var api = {
	getRovers(){
		var url  = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`;
		return fetch(url).then((res) => res.json());
	}
}

module.exports = api;