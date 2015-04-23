var binocularDataService = require('./../index.js'),
	bds = new binocularDataService();


var deviceTypeId = "55286276e0cec07753a55c8a";

bds.activateDevice(deviceTypeId, function(err, device) {
	if(err) {
		console.log(err);
	} else {
		console.log(device)
	}
});