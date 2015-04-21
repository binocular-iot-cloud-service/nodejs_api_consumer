var _interface = require('./binocular-data-service')

module.exports = function() {
	this.setCredentials = function(api_key, client_secret) {
		var config = {
			API_KEY: api_key,
			CLIENT_SECRET: client_secret,
			host: "https://api.binocular.se/v1"
		};

		var content = JSON.stringify(config);

		var fs = require('fs');
		fs.writeFile(__dirname+"/config.json", content, function(err) {
		    if(err) {
		        return console.log(err);
		    }
		}); 

	};

	for(var obj in _interface) {
		this[obj] = _interface[obj];
	}
}