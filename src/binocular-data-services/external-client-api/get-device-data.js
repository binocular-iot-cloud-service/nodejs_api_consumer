function getQueryParameters(options) {
	var params=[];

	if(options===undefined) {
		return "";
	}
	if(options.hasOwnProperty("limit")) {
		var param="limit="+options.limit;
		params.push(param);
	}
	if(options.hasOwnProperty("next")) {
		var param="next="+options.next;
		params.push(param);
	}
	if(options.hasOwnProperty("timestamp")) {
		var param="timestamp="+options.timestamp;
		params.push(param);
	}
	if(params.length>0) {
		return '?'+params.join('&');
	}
	return "";
}

this.getDeviceData = function(deviceTypeIds, options, callback) {
	if(typeof options==="function") {
		callback=function(options) {
			return options;
		}(options);
		options=undefined;
	}
	if(Array.isArray(deviceTypeIds)) {
		var endpoint = ['/devices', 'data'].join('/');
		endpoint += (options) ? getQueryParameters(options) : "";
		http.post(endpoint, deviceTypeIds, callback);

	} else {
		var endpoint = ['/devices', deviceTypeIds, 'data'].join('/');
		endpoint += (options) ? getQueryParameters(options) : "";
		console.log(endpoint);
		http.get(endpoint, callback);
	}
}