exports.sendData = function(deviceId, data, callback) {
	var endpoint = ['/devices', deviceId, 'data'].join('/');
	http.post(endpoint, data, callback);
}