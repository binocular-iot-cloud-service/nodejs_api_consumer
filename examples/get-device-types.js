var binocularDataService = require('./../index.js'),
	bds = new binocularDataService("API_KEY", "CLIENT_SECRET");


bds.getDeviceTypes(function(err, devicetypes) {
	if(err) {
		console.log(err);
	} else {
		console.log(devicetypes)
	}
})