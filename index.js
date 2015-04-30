module.exports = function(api_key, client_secret) {
	var self = this;

	var http = require('./src/binocular-http-client');
	var http = new http(api_key, client_secret);
		//dataService = require('./binocular-data-service');

	var ds = require('./binocular-data-service');
	var _interface = new ds(http);
	console.log(_interface);

	for(var obj in _interface) {
		self[obj] = _interface[obj];
	}
}