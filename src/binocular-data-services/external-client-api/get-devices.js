exports.getDevices = function(callback) {
	var endpoint = "/devices";
	http.get(endpoint, callback);
}