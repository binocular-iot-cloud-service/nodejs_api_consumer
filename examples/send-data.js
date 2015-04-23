var binocularDataService = require('./../index.js'),
	bds = new binocularDataService();


var deviceId = "",
	data = {
		"some":"field"
	};

bds.sendData(deviceId, data, function(err, device) {
	if(err) {
		console.log(err);
	} else {
		console.log(device)
	}
});