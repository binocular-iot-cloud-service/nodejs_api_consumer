this.getDeviceTypes = function(callback) {
	var endpoint = "/devicetypes";
	http.get(endpoint, callback);
}