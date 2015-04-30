this.getFlags = function(deviceId, callback) {
	var endpoint = ['/devices', deviceId, 'flags'].join('/');
	http.get(endpoint, callback);
}