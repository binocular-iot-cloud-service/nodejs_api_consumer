var binocularDataService = require('./../index.js'),
	bds = new binocularDataService();


var deviceTypeId = "";

bds.getDevicesByDevicetype(deviceTypeId ,function(err, devices) {
	if(err) {
		console.log(err);
	} else {
		console.log(devices)
	}
})