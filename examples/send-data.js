var binocularDataService = require('./../index.js'),
	bds = new binocularDataService();


var deviceId = "55286276e0cec07753a55c8a",
	data = {
		"some":"data";
	};

bds.sendData(deviceId, function(err, device) {
	if(err) {
		console.log(err);
	} else {
		console.log(device)
	}
});