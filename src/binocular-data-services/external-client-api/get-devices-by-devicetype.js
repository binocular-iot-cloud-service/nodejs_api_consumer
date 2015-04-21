exports.getDevicesByDevicetype = function(deviceTypeId, callback) {
	var endpoint = ['/devicetypes', deviceTypeId, 'devices'].join('/');
	http.get(endpoint, callback);
}