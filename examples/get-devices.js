var binocularDataService = require('./../index.js'),
	bds = new binocularDataService();

bds.getDevices(function(err, devices) {
	if(err) {
		console.log(err);
	} else {
		console.log(devices)
	}
})