this.getDevice = function(deviceId, callback) {
	var endpoint = ['/devices', deviceId].join('/');
	http.get(endpoint, callback);
}