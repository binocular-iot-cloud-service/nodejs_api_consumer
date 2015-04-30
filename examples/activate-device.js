var binocularDataService = require('./../index.js'),
	bds = new binocularDataService("API_KEY", "CLIENT_SECRET");


var deviceTypeId = "";

bds.activateDevice(deviceTypeId, function(err, device) {
	if(err) {
		console.log(err);
	} else {
		console.log(device)
	}
});