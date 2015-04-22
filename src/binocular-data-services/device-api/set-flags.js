exports.setFlags = function(deviceId, flags, callback) {
	var endpoint = ['/devices', deviceId, 'flags'].join('/');
	http.post(endpoint, flags, callback);
}