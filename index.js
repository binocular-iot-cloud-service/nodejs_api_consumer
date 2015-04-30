module.exports = function(api_key, client_secret) {
	var self = this,
		BinocularHttpClient = require('./src/binocular-http-client'),
		BinocularDataService = require('./binocular-data-service');

	var http = new BinocularHttpClient(api_key, client_secret);
	var _interface = new BinocularDataService(http);

	for(var obj in _interface) {
		self[obj] = _interface[obj];
	}
}