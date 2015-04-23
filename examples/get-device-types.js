var binocularDataService = require('./../index.js'),
	bds = new binocularDataService();

bds.getDeviceTypes(function(err, devicetypes) {
	if(err) {
		console.log(err);
	} else {
		console.log(devicetypes)
	}
})