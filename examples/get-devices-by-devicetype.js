var binocularDataService = require('./../index.js'),
	bds = new binocularDataService("API_KEY", "CLIENT_SECRET");


var deviceTypeId = "";

bds.getDevicesByDevicetype(deviceTypeId ,function(err, devices) {
	if(err) {
		console.log(err);
	} else {
		console.log(devices)
	}
})