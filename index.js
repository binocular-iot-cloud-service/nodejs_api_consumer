module.exports = function() {
	var self = this;
	var setInterface = function() {
		var _interface = require('./binocular-data-service');

		for(var obj in _interface) {
			self[obj] = _interface[obj];
		}
	}
	try {
		setInterface();
	} catch(e) {
		console.log("You need to set your api credentials");
	}

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
		    } else {
		    	setInterface();
		    }
		}); 

	};
	
}