this.sendHeartbeat = function(deviceId, callback) {
	var endpoint = ['/devices', deviceId, 'heartbeat'].join('/')
	http.get(endpoint, callback);
}