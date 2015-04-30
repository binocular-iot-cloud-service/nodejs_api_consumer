this.getDeviceDataEntry = function(entryId, callback) {
	var endpoint = ['/data', entryId].join('/');
	http.get(endpoint, callback)
}