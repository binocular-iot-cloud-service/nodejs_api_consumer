this.getDeviceData = function(deviceTypeIds, callback) {
	if(Array.isArray(deviceTypeIds)) {
		var endpoint = ['/devices', 'data'].join('/');
		http.post(endpoint, deviceTypeIds, callback);

	} else {
		var endpoint = ['/devices', deviceTypeIds, 'data'].join('/');
		http.get(endpoint, callback);
	}
}